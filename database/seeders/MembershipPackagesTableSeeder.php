<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MembershipPackagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('membership_packages')->insert([
            [
                'package_name' => 'Cardio',
                'admission_amount' => 0,
                'monthly_amount' => 3500,
                'discount_quarterly' => 500,
                'discount_half_yearly' => 3000,
                'discount_yearly' => 12000,
                'months' => 1200
            ],
            [
                'package_name' => 'Gym',
                'admission_amount' => 0,
                'monthly_amount' => 3000,
                'discount_quarterly' => 1000,
                'discount_half_yearly' => 3000,
                'discount_yearly' => 9000,
                'months' => 1200
            ],
            [
                'package_name' => 'Gym + Cardio',
                'admission_amount' => 0,
                'monthly_amount' => 5500,
                'discount_quarterly' => 1500,
                'discount_half_yearly' => 8000,
                'discount_yearly' => 21000,
                'months' => 1200
            ],
            [
                'package_name' => 'Cardio + Zumba',
                'admission_amount' => 0,
                'monthly_amount' => 5500,
                'discount_quarterly' => 1500,
                'discount_half_yearly' => 8000,
                'discount_yearly' => 21000,
                'months' => 1200
            ],
            [
                'package_name' => 'Gym + Zumba',
                'admission_amount' => 0,
                'monthly_amount' => 5000,
                'discount_quarterly' => 2000,
                'discount_half_yearly' => 8000,
                'discount_yearly' => 20000,
                'months' => 1200
            ],
            [

                'package_name' => 'Aerobic + Zumba + Yoga',
                'admission_amount' => 0,
                'monthly_amount' => 2250,
                'discount_quarterly' => 350,
                'discount_half_yearly' => 2500,
                'discount_yearly' => 9000,
                'months' => 1200
            ],
            [
                'package_name' => 'Gym + Cardio + Aerobic',
                'admission_amount' => 0,
                'monthly_amount' => 7000,
                'discount_quarterly' => 3000,
                'discount_half_yearly' => 12000,
                'discount_yearly' => 29000,
                'months' => 1200
            ],
            [
                'package_name' => 'Gym + Cardio + Sauna + Steam',
                'admission_amount' => 0,
                'monthly_amount' => 10000,
                'discount_quarterly' => 5000,
                'discount_half_yearly' => 15000,
                'discount_yearly' => 40000,
                'months' => 1200
            ],
            [
                'package_name' => 'All Packages',
                'admission_amount' => 0,
                'monthly_amount' => 13000,
                'discount_quarterly' => 9000,
                'discount_half_yearly' => 23000,
                'discount_yearly' => 66000,
                'months' => 1200
            ],
            [
                'package_name' => 'Lifetime',
                'admission_amount' => 540000,
                'monthly_amount' => 0,
                'discount_quarterly' => 0,
                'discount_half_yearly' => 0,
                'discount_yearly' => 0,
                'months' => 1200
            ],
            [
                'package_name' => 'Boxing',
                'admission_amount' => 2000,
                'monthly_amount' => 3000,
                'discount_quarterly' => 1000,
                'discount_half_yearly' => 3000,
                'discount_yearly' => 10000,
                'months' => 1200
            ]
        ]);
    }
}
