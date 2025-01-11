<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMembershipRenewalsTable extends Migration
{
    public function up()
    {
        Schema::create('membership_renewals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('member_id')->constrained()->onDelete('cascade');
            $table->foreignId('membership_package_id')->constrained()->onDelete('cascade');
            $table->decimal('monthly_fees', 10, 2);
            $table->integer('total_months');
            $table->decimal('paid_amount', 10, 2);
            $table->decimal('extra_discount', 10, 2)->nullable();
            $table->decimal('package_discount', 10, 2)->nullable();
            $table->string('bill_number')->nullable();
            $table->date('payment_date');
            $table->string('payment_mode');
            $table->string('payment_proof')->nullable();
            $table->date('active_till');
            $table->decimal('net_amount', 10, 2);
            $table->boolean('is_approved')->default(true);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('membership_renewals');
    }
}
