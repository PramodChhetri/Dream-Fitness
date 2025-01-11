<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEntryPaymentsTable extends Migration
{
    public function up()
    {
        Schema::create('entry_payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('member_id')->constrained()->onDelete('cascade');
            $table->decimal('admission_fees', 10, 2)->nullable();
            $table->decimal('monthly_fees', 10, 2)->nullable();
            $table->integer('total_months')->nullable();
            $table->decimal('total_monthly_fees', 10, 2)->nullable();
            $table->decimal('extra_discount', 10, 2)->nullable();
            $table->integer('locker_months')->nullable();
            $table->decimal('locker_charge', 10, 2)->nullable();
            $table->decimal('locker_discount', 10, 2)->nullable();
            $table->decimal('paid_amount', 10, 2)->nullable();
            $table->decimal('net_amount', 10, 2)->nullable();
            $table->decimal('package_discount', 10, 2)->nullable();
            $table->date('payment_date')->nullable();
            $table->string('bill_number')->nullable();
            $table->string('payment_mode')->default('cash');
            $table->date('active_till')->nullable();
            $table->string('payment_proof')->nullable();
            $table->boolean('is_approved')->default(true);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('entry_payments');
    }
}
