import InputError from '@/Components/InputError';
import { Button } from '@/Components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/Components/ui/dialog';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { Textarea } from '@/Components/ui/textarea';
import { toast } from '@/Components/ui/use-toast';
import { useForm } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';

const TransactionDialog = () => {
    const { data, setData, errors, post, processing, reset } = useForm({
        name: '',
        transaction_type: '',
        description: '',
        total_amount: '',
        paid_amount: '',
        payment_date: '',
        payment_mode: '',
        bill_number: '',
    });

    const [open, setOpen] = useState(false);

    // Set initial value for payment_date to current date
    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
        setData('payment_date', currentDate);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/transactions/store', {
            onSuccess: () => {
                toast({ description: 'Transaction created successfully...', });
                setOpen(false);
                reset();
            },
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button>Create Transaction</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Transaction</DialogTitle>
                    <DialogDescription>Create miscellaneous transactions for non-registered or registered members.</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    {/* Non-member Name */}
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <Label>Person Name</Label>
                            <Input
                                required
                                placeholder="Enter Full Name of a person"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            <InputError message={errors.name} />
                        </div>
                    </div>

                    {/* Grid layout for smaller fields */}
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
                                    <SelectItem value="refund">Refund</SelectItem>
                                    <SelectItem value="others">Others</SelectItem>
                                </SelectContent>
                            </Select>
                            <InputError message={errors.transaction_type} />
                        </div>

                        <div>
                            <Label>Total Amount</Label>
                            <Input
                                type="number"
                                placeholder="Enter total amount"
                                value={data.total_amount}
                                onChange={(e) => setData('total_amount', e.target.value)}
                            />
                            <InputError message={errors.total_amount} />
                        </div>

                        <div>
                            <Label>Paid Amount</Label>
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

                        <div>
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
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default TransactionDialog;
