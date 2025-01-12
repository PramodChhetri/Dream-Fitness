<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMiscellaneousTransactionRequest;
use App\Models\EntryPayment;
use App\Models\Expense;
use App\Models\LockerPayment;
use App\Models\Member;
use App\Models\MembershipRenewal;
use App\Models\Refund;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index(Request $request)
    {
        $tab = $request->query('tab', 'registrations'); // Default to 'registrations'

        // Determine the base query and relations based on the tab
        switch ($tab) {
            case 'renewals':
                $query = MembershipRenewal::with('member.membershipPackage');
                break;
            case 'lockers':
                $query = LockerPayment::with('member');
                break;
            case 'miscellaneous':
                $query = Transaction::with('invoice')->with('member');
                break;
            case 'refunds':
                $query = Refund::with('member');
                break;
            case 'expenses':
                $query = Expense::query();
                break;
            default:
                $query = EntryPayment::with('member.membershipPackage');
                break;
        }

        // Use QueryBuilder to apply filters for startDate and endDate on the base query
        $data = QueryBuilder::for($query)
            ->allowedFilters([
                AllowedFilter::callback('startDate', function ($query, $value) {
                    $query->whereDate('payment_date', '>=', $value);
                }),
                AllowedFilter::callback('endDate', function ($query, $value) {
                    $query->whereDate('payment_date', '<=', $value);
                })
            ])
            ->orderBy('payment_date', 'desc')
            ->orderBy('id', 'desc')
            ->paginate(50)
            ->withQueryString();

        return Inertia::render('Transactions/Index', [
            'data' => $data,
            'activeTab' => $tab, // Pass the current active tab to the frontend
        ]);
    }




    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMiscellaneousTransactionRequest $request)
    {
        $data = $request->validated();

        if ($data['transaction_type'] === 'refund') {
            return DB::transaction(function () use ($data) {

                $totalRefundAmount = $data['refund_amount'];
                $member = Member::findOrFail($data['member_id']);

                $memberBalance = $member->credit; // Positive for credit, negative for advance

                if ($memberBalance < 0) {
                    // Handle refund when the member has an outstanding advance (negative balance)
                    $absAdvanceAmount = abs($memberBalance);

                    if ($totalRefundAmount > $absAdvanceAmount) {
                        // The refund amount exceeds the member's advance balance
                        $amountToBeAddedAsCredit = $totalRefundAmount - $absAdvanceAmount;

                        // Adjust the member's balance to reflect the new credit
                        $member->update(['credit' => $amountToBeAddedAsCredit]);

                        // Record a refund transaction
                        Refund::create([
                            'refund_amount' => $totalRefundAmount,
                            'payment_date' => $data['payment_date'],
                            'payment_mode' => $data['payment_mode'],
                            'description' => $data['description'] ?? null,
                            'member_id' => $member->id,
                            'payment_voucher' => $data['payment_voucher'] ?? null,
                        ]);
                    } else {
                        // The refund amount only reduces the member's advance balance
                        $member->update(['credit' => $memberBalance + $totalRefundAmount]);

                        Refund::create([
                            'refund_amount' => $totalRefundAmount,
                            'payment_date' => $data['payment_date'],
                            'payment_mode' => $data['payment_mode'],
                            'description' => $data['description'] ?? null,
                            'member_id' => $member->id,
                            'payment_voucher' => $data['payment_voucher'] ?? null,
                        ]);
                    }
                } else if ($memberBalance > 0) {
                    // Handle refund when the member has a credit balance (positive balance)
                    $member->update(['credit' => $memberBalance + $totalRefundAmount]);

                    // Record a refund transaction
                    Refund::create([
                        'refund_amount' => $totalRefundAmount,
                        'payment_date' => $data['payment_date'],
                        'payment_mode' => $data['payment_mode'],
                        'description' => $data['description'] ?? null,
                        'member_id' => $member->id,
                        'payment_voucher' => $data['payment_voucher'] ?? null,
                    ]);
                } else {
                    // Record a refund transaction
                    Refund::create([
                        'refund_amount' => $totalRefundAmount,
                        'payment_date' => $data['payment_date'],
                        'payment_mode' => $data['payment_mode'],
                        'description' => $data['description'] ?? null,
                        'member_id' => $member->id,
                        'payment_voucher' => $data['payment_voucher'] ?? null,
                    ]);
                }

                return redirect()->back()->with('success', 'Refund transaction completed successfully.');
            });
        } else if ($data['transaction_type']  === 'expense') {
            return DB::transaction(function () use ($data) {
                $transaction = Expense::create($data);

                return redirect()->back()->with('success', 'Expense transaction created successfully.');
            });
        } else {
            // Handle other transaction types
            return DB::transaction(function () use ($data) {
                $data['remarks'] = $data['description'] ?? '';

                $transaction = Transaction::create($data);
                $credit = $transaction->total_amount - $transaction->paid_amount;

                if ($transaction->member) {
                    $transaction->member->update(['credit' => $transaction->member->credit + $credit]);
                }

                return redirect()->back()->with('success', 'Transaction and invoice created successfully.');
            });
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
