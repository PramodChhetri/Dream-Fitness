<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name' => 'Nexis Admin',
                'email' => 'nexisnepal@gmail.com',
                'password' => Hash::make('Nexis@2081'),
                'email_verified_at' => now()
            ],
            [
                'name' => 'Dream Fitness Admin',
                'email' => 'dreamfitness@gmail.com',
                'password' => Hash::make('dreamfitness'),
                'email_verified_at' => now()
            ],
        ]);
    }
}
