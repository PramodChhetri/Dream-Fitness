<?php

namespace Database\Seeders;

use App\Models\Member;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class MembersTableSeeder extends Seeder
{
    public function run()
    {
        // Path to the CSV file
        $filePath = public_path('members.csv');

        // Temporarily disable foreign key checks
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        // Truncate the 'members' table
        DB::table('members')->truncate();

        // Re-enable foreign key checks
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');


        // Open the file and read its contents
        if (($handle = fopen($filePath, 'r')) !== false) {
            $header = fgetcsv($handle, 1000, ',');

            $header[0] = 'id';

            $map = [];

            // Loop through each row of the CSV file
            while (($row = fgetcsv($handle, 1000, ',')) !== false) {
                // Create an associative array for each row
                $rowData = array_combine($header, $row);

                $preferredTime = $rowData['preferedtime'];  // Assuming this is in the format "H:i:s" (e.g., "15:00:00")
                $time = Carbon::parse($preferredTime);  // Parse the time string into a Carbon instance

                // Check the time and assign the period
                if ($time->between(Carbon::parse('00:00:00'), Carbon::parse('12:00:00'))) {
                    $timeOfDay = 'Morning';
                } elseif ($time->between(Carbon::parse('12:00:00'), Carbon::parse('16:00:00'))) {
                    $timeOfDay = 'Day';
                } else {
                    $timeOfDay = 'Evening';
                }


                // Map the CSV fields to the database fields
                $memberData = [
                    'id' => $rowData['id'],
                    'name' => $rowData['fullname'],
                    'gender' => strtolower($rowData['gender']) === 'male' ? 'male' : 'female',
                    'phone' => $rowData['mobile'],
                    'occupation' => $rowData['occupation'],
                    'address' => $rowData['address'],
                    'membership_package_id' => $this->mapMembershipPackage($rowData['membershiptype_id']),
                    'start_date' => Carbon::parse($rowData['firstpayment'])->format('Y-m-d'),
                    'end_date' => Carbon::parse($rowData['nextdue'])->format('Y-m-d'),
                    'payment_expiry_date' => Carbon::parse($rowData['nextdue'])->format('Y-m-d'),
                    'total_payment' => 0.00, // Default for now, can be updated
                    'credit' => 0.00, // Default for now
                    'is_approved' => 1, // Assuming all members are approved
                    'marital_status' => $rowData['maritialstatus'], // Can be changed if present in data
                    'preferred_time' => $timeOfDay, // Placeholder
                    'on_device' => 0, // Default value
                    'date_of_birth' => Carbon::parse($rowData['dob'])->format('Y-m-d'), // Default if not provided
                    'is_approved' => 1,
                    'photo' => 'storage/members/' . $rowData['id'] . '.jpg',
                    'emergency_person_name' => $rowData['fathersname'],
                    'remarks' => $rowData['otherinformations'],
                ];
                //Log::info($memberData['id']);

                $map[] = (int) $memberData['id'];

                // Insert or update the member in the database
                DB::table('members')->insert($memberData);
            }

            Log::info($map);

            // Close the file after reading
            fclose($handle);
        }
    }

    // Map membership packages based on the table you've provided
    private function mapMembershipPackage($packageName)
    {
        $packages = [
            '1' => 1,
            '2' => 7,
            '3' => 6,
            '4' => 5,
            '5' => 2,
            '6' => 3,
            '7' => 4,
        ];

        return $packages[$packageName] ?? 1; // Default to 'Cardio' if not found
    }
}
