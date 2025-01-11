<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class Member extends Model
{
    use HasFactory;

    protected $guarded = [];

    // Append status attribute dynamically
    protected $appends = ['status', 'plain_image'];

    public function getPlainImageAttribute()
    {
        $imagePath = $this->attributes['photo'];

        // Remove query string if it exists
        return preg_replace('/\?v=\d+/', '', $imagePath);
    }


    /**
     * Calculate member status dynamically based on various conditions
     * 
     * @return string
     */
    public function getStatusAttribute()
    {
        if (!$this->is_approved) {
            return 'Unapproved';
        }

        /*         if ($this->end_date && now() > $this->end_date) {
            return 'Expired';
        } */

        if ($this->payment_expiry_date && now() >= $this->payment_expiry_date) {
            return 'Expired';
        }

        if ($this->payment_expiry_date && now() < $this->payment_expiry_date) {
            return 'Active';
        }

        return 'Unknown'; // Fallback status
    }

    /**
     * Relationship to member locker
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function locker()
    {
        return $this->hasOne(MemberLocker::class);
    }

    /**
     * Fetch only the active locker for the member
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function activeLocker()
    {
        return $this->hasOne(MemberLocker::class, 'member_id')
            ->where('locker_status', 1) // Locker is active
            ->where('end_date', '>', now()); // End date is in the future
    }

    /**
     * Relationship to membership package
     * 
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function membershipPackage()
    {
        return $this->belongsTo(MembershipPackage::class);
    }

    /**
     * Unified payments function for all types of payments
     * (entry_payments, renewals, locker_payments)
     * 
     * @return \Illuminate\Support\Collection
     */
    public function allPayments(): Collection
    {
        // Get all payments from the entry, renewals, locker, and miscellaneous transactions
        $entryPayments = $this->hasMany(EntryPayment::class)->get()->map(function ($payment) {
            $payment->type = 'entry'; // Mark as entry payment
            return $payment;
        });

        $renewals = $this->hasMany(MembershipRenewal::class)->get()->map(function ($payment) {
            $payment->type = 'renewal'; // Mark as renewal payment
            return $payment;
        });

        $lockerPayments = $this->hasMany(LockerPayment::class)->get()->map(function ($payment) {
            $payment->type = 'locker'; // Mark as locker payment
            return $payment;
        });

        $miscellaneousTransactions = $this->hasMany(Transaction::class)->get()->map(function ($payment) {
            $payment->type = $payment->transaction_type;
            $payment->net_amount = $payment->total_amount;
            return $payment;
        });

        // Merge all payment collections into one
        $allPayments = collect()
            ->concat($entryPayments)
            ->concat($renewals)
            ->concat($lockerPayments)
            ->concat($miscellaneousTransactions);

        // Sort by payment_date first, and then by created_at if payment_date is the same
        return $allPayments->sortByDesc('created_at');
    }
}
