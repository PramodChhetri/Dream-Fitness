import InputError from "@/Components/InputError";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import { Textarea } from "@/Components/ui/textarea";
import { toast } from "@/Components/ui/use-toast";
import { Member } from "@/types/members";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import { format } from "date-fns";
import { FormEvent, useEffect } from "react";

export function MemberAccountsDialog({ member, open, onClose }: { member: Member, open: boolean, onClose: () => void }) {

    // Combine all types of payments into a unified array
    const ledger = Object.values(member.all_payments);

    // Ensure that sorting considers all dates correctly
    ledger.sort((a: any, b: any) => {
        const dateA = new Date(a.payment_date || a.created_at);
        const dateB = new Date(b.payment_date || b.created_at);
        return dateB.getTime() - dateA.getTime(); // Sort from newest to oldest
    });

    const AddTransactionDialog = () => {

        const { data, setData, errors, post, processing, reset } = useForm({
            member_id: member.id,
            transaction_type: '',
            description: '',
            total_amount: '',
            paid_amount: '',
            payment_date: '',
            payment_mode: '',
            bill_number: '',
        });

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            post('/transactions/store', {
                onSuccess: () => {
                    toast({ description: 'Transaction created successfully...', });
                    reset();
                },
            });
        };

        useEffect(() => {
            if (data.transaction_type === 'credit-payment')
                setData('total_amount', '0');
        }, [data.payment_mode]);

        return (
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant={"default"} className="w-fit ms-auto">Add Transaction</Button>
                </DialogTrigger>
                <DialogContent className="max-w-[500px]">
                    <form onSubmit={handleSubmit} className="space-y-2">
                        <div className="space-y-2">
                            <h4 className="font-medium leading-none">Add Transaction</h4>
                            <p className="text-sm text-muted-foreground">
                                Enter the miscellaneous transaction details for <strong>{member.name}</strong>
                            </p>
                        </div>
                        <div>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                    <Label>Transaction Type</Label>
                                    <Select
                                        value={data.transaction_type}
                                        onValueChange={(val) => setData('transaction_type', val)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select transaction type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="service">Service</SelectItem>
                                            <SelectItem value="product">Product</SelectItem>
                                            <SelectItem value="credit-payment">Credit Payment</SelectItem>
                                            <SelectItem value="others">Others</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.transaction_type} />
                                </div>

                                {data.transaction_type !== 'credit-payment' ? <div>
                                    <Label>Total Amount</Label>
                                    <Input
                                        type="number"
                                        placeholder="Enter total amount"
                                        value={data.total_amount}
                                        onChange={(e) => setData('total_amount', e.target.value)}
                                    />
                                    <InputError message={errors.total_amount} />
                                </div> : ''}

                                <div>
                                    <Label>Payment Amount</Label>
                                    <Input
                                        type="number"
                                        placeholder="Enter paid amount"
                                        value={data.paid_amount}
                                        onChange={(e) => setData('paid_amount', e.target.value)}
                                    />
                                    <InputError message={errors.paid_amount} />
                                </div>

                                <div>
                                    <Label>Payment Mode</Label>
                                    <Select
                                        value={data.payment_mode}
                                        onValueChange={(val) => setData('payment_mode', val)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select payment mode" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Cash">Cash</SelectItem>
                                            <SelectItem value="QR">QR</SelectItem>
                                            <SelectItem value="Cash + QR">Cash + QR</SelectItem>
                                            <SelectItem value="Cheque">Cheque</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.payment_mode} />
                                </div>

                                <div>
                                    <Label>Payment Date</Label>
                                    <Input
                                        type="date"
                                        value={data.payment_date}
                                        onChange={(e) => setData('payment_date', e.target.value)}
                                    />
                                    <InputError message={errors.payment_date} />
                                </div>

                                <div className={data.transaction_type === 'credit-payment' ? 'col-span-full' : ''}>
                                    <Label>Bill Number (optional)</Label>
                                    <Input
                                        placeholder="Enter bill number (if applicable)"
                                        onChange={(e) => setData('bill_number', e.target.value)}
                                    />
                                    <InputError message={errors.bill_number} />
                                </div>
                            </div>

                            {/* Full-width for larger fields */}
                            <div className="grid grid-cols-1 gap-4 mt-4">
                                <div>
                                    <Label>Description</Label>
                                    <Textarea
                                        placeholder="Enter Description of the transaction"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                    />
                                    <InputError message={errors.description} />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <Button type="submit" className="mt-4 w-full" disabled={processing}>
                                {processing ? 'Processing...' : 'Create Transaction'}
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        );
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-[1600px] w-[95vw] max-h-[99vh] overflow-auto">
                <DialogHeader>
                    <DialogTitle>Member Transactions</DialogTitle>
                    <DialogDescription>Efficiently analyze the payments of a member.</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-2">
                    <Card className="bg-blue-500">
                        <CardHeader>
                            <CardTitle className="text-white">{ledger.length}</CardTitle>
                            <CardDescription className="text-white/80">Total Transactions</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="bg-fuchsia-600">
                        <CardHeader>
                            <CardTitle className="text-white">Rs {ledger.reduce((total, payment) => total + Number(payment.paid_amount), 0)}</CardTitle>
                            <CardDescription className="text-white/80">Total Paid Amount</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className={member.credit > 0 ? 'bg-red-500' : 'bg-green-500'}>
                        <CardHeader>
                            <CardTitle className={'text-white'} >Rs {Math.abs(Number(member.credit))}</CardTitle>
                            <CardDescription className='text-white/80'>Total {
                                member.credit <= 0 ? ' Advance ' : ' Credit '
                            } Amount</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
                <div className="w-fit ms-auto space-x-2">
                    <AddTransactionDialog />
                </div>
                <Card>
                    <CardContent>
                        <Table className="text-center">
                            <TableHeader>
                                <TableRow className="hover:bg-card">
                                    <TableHead className="text-center">Date</TableHead>
                                    <TableHead className="text-center">Total</TableHead>
                                    <TableHead className="text-center">Extra Disc.</TableHead>
                                    <TableHead className="text-center">Paid</TableHead>
                                    <TableHead className="text-center">Credit/Adv.</TableHead>
                                    <TableHead className="text-center">Bill No.</TableHead>
                                    <TableHead className="text-center">Transaction Type</TableHead>
                                    <TableHead className="text-center">Payment Mode</TableHead>
                                    <TableHead className="text-center">Remarks</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    ledger.map((l: any) => {
                                        // Calculate Balance/Credit Amount
                                        const dueAmount = l.paid_amount ? Number(l.net_amount - l.paid_amount) : Number(l.net_amount);

                                        return (
                                            <TableRow key={l.id} className="hover:bg-muted/15">
                                                {/* Date in custom format */}
                                                <TableCell>{format(new Date(l.payment_date || l.created_at), 'MMM d, yyyy')}</TableCell>
                                                {/* Total Amount */}
                                                <TableCell>{Number(l.net_amount) ? `Rs ${Number(l.net_amount)}` : '-'}</TableCell>
                                                {/* Extra Discount */}
                                                <TableCell>{l.extra_discount ? `Rs ${Number(l.extra_discount)}` : '-'}</TableCell>
                                                {/* Paid Amount */}
                                                <TableCell>{l.paid_amount ? `Rs ${Number(l.paid_amount)}` : '-'}</TableCell>
                                                {/* Balance / Credit */}
                                                <TableCell>
                                                    <small className={"px-3 py-1 rounded-full text-white font-bold " + (dueAmount > 0 ? 'bg-red-500' : dueAmount < 0 ? 'bg-green-500' : 'text-black')}>
                                                        {dueAmount >= 0 ? `Rs ${dueAmount}` : `Rs ${Math.abs(dueAmount)}`}
                                                    </small>
                                                </TableCell>
                                                {/* Bill Number */}
                                                <TableCell>{l.bill_number ? <Badge>{l.bill_number}</Badge> : '-'}</TableCell>
                                                {/* Transaction Type */}
                                                <TableCell className="capitalize">
                                                    {l.type || 'Credit Added'}
                                                    {
                                                        l.locker_months > 0 ? <span> + locker</span> : ''
                                                    }
                                                </TableCell>
                                                {/* Payment Mode */}
                                                <TableCell>{l.payment_mode || '-'}</TableCell>
                                                {/* Remarks */}
                                                <TableCell>{l.remarks || '-'}</TableCell>
                                            </TableRow>
                                        );
                                    })
                                }
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </DialogContent>
        </Dialog>
    );
}
