<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMiscellaneousTransactionRequest extends FormRequest
{
    public function authorize()
    {
        // Authorize all authenticated users to make a request
        return true;
    }

    public function rules()
    {
        return [
            'member_id' => ['nullable', 'integer', 'required_without:name', 'exists:members,id'],
            'name' => ['nullable', 'string', 'max:255', 'required_without:member_id'],
            'transaction_type' => ['required', 'string'],
            'description' => ['nullable', 'string', 'max:500'],
            'total_amount' => ['required', 'numeric', 'min:0'],
            'paid_amount' => ['required', 'numeric', 'min:0'],
            'payment_date' => ['required', 'date'],
            'payment_mode' => ['required', 'string'],
            'bill_number' => ['nullable', 'string', 'max:255'],
        ];
    }

    public function messages()
    {
        return [
            'name.max' => 'Person name can only be a maximum of 255 characters.',
            'name.required_without' => 'Name must be provided.',
            'transaction_type.required' => 'Please select the type of transaction.',
            'total_amount.required' => 'Total amount is required.',
            'total_amount.numeric' => 'Total amount must be a valid number.',
            'paid_amount.required' => 'Paid amount is required.',
            'paid_amount.numeric' => 'Paid amount must be a valid number.',
            'payment_date.required' => 'Payment date is required.',
            'payment_mode.required' => 'Payment mode is required.',
            'payment_mode.in' => 'Payment mode must be one of the following: cash, QR.',
            'bill_number.max' => 'Bill number can only be a maximum of 255 characters.',
            'member_id.required_without' => 'Either member ID or name must be provided.', // New message for member_id
        ];
    }

    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation()
    {
        // Here, you can manipulate or modify the data before validation
        $this->merge([
            'total_amount' => (float) $this->total_amount,
            'paid_amount' => (float) $this->paid_amount,
        ]);
    }
}
