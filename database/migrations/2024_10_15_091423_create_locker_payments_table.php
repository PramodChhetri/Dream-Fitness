<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLockerPaymentsTable extends Migration
{
    public function up()
    {
        Schema::create('locker_payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('member_id')->constrained()->onDelete('cascade');
            $table->integer('total_months');
            $table->decimal('locker_charge', 10, 2);
            $table->decimal('locker_discount', 10, 2)->nullable();
            $table->string('bill_number')->nullable();
            $table->string('payment_mode')->nullable();
            $table->date('payment_date');
            $table->date('active_till');
            $table->decimal('paid_amount', 10, 2);
            $table->decimal('net_amount', 10, 2);
            $table->boolean('is_approved')->default(true);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('locker_payments');
    }
}
