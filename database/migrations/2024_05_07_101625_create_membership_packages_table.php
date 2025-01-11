<?php

use Database\Seeders\MembershipPackagesTableSeeder;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('membership_packages', function (Blueprint $table) {
            $table->id();
            $table->string('package_name');
            $table->decimal('admission_amount', 10, 2);
            $table->decimal('monthly_amount', 10, 2);
            $table->decimal('discount_quarterly', 10, 2)->default(0);
            $table->decimal('discount_half_yearly', 10, 2)->default(0);
            $table->decimal('discount_yearly', 10, 2)->default(0);
            $table->integer('months');
        });
    }



    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('membership_packages');
    }
};
