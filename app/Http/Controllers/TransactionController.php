<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMiscellaneousTransactionRequest;
use App\Models\EntryPayment;
use App\Models\LockerPayment;
use App\Models\MembershipRenewal;
use App\Models\Transaction;
use Illuminate\Http\Request;
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
        // Start a transaction
        return DB::transaction(function () use ($request) {
            $data = $request->validated();
            $data['remarks'] = $request->input('description', '');
            $transaction = Transaction::create($data);
            $credit = $transaction->total_amount - $transaction->paid_amount;
            if ($transaction->member)
                $transaction->member->update(['credit' => $transaction->member->credit + $credit]);
            return redirect()->back()->with('success', 'Transaction and invoice created successfully.');
        });
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
