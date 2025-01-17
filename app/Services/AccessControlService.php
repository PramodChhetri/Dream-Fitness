<?php

namespace App\Services;

use App\Models\AccessControl;
use App\Models\Member;
use App\Models\Official;
use Carbon\Carbon;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Log;

class AccessControlService
{
    /**
     * Register or update a user on all associated devices.
     */
    private function putUser($id, string $name, string $gender, string $beginDate, string $expiryDate, Collection $devices)
    {

        foreach ($devices as $device) {
            $url = "http://{$device->ip_address}:{$device->port}/ISAPI/AccessControl/UserInfo/Setup?format=json";
            try {
                Http::withDigestAuth($device->username, $device->password)
                    ->put($url, [
                        "UserInfo" => [
                            "employeeNo" => strval($id),
                            "name" => $name,
                            "userType" => "normal",
                            "closeDelayEnabled" => false,
                            "Valid" => [
                                "enable" => true,
                                "beginTime" => Carbon::parse($beginDate)->format('Y-m-d\TH:i:s'),
                                "endTime" => Carbon::parse($expiryDate)->format('Y-m-d\T23:59:59'),
                                "timeType" => "local"
                            ],
                            "doorRight" => "1",
                            "RightPlan" => [
                                [
                                    "doorNo" => 1,
                                    "planTemplateNo" => "1"
                                ]
                            ],
                            "gender" => $gender
                        ]
                    ]);
            } catch (\Exception $e) {
                Log::error("Failed to register user $id on device {$device->name}: " . $e->getMessage());
            }
        }
    }

    /**
     * Upload a photo for a user on all associated devices.
     */
    private function putPhoto($id, string $imagePath, Collection $devices)
    {
        //dd($imagePath);
        $imagePath = file_get_contents($imagePath);
        $client = new Client();
        foreach ($devices as $device) {
            $url = "http://" . $device->ip_address . ":" . $device->port . "/ISAPI/Intelligent/FDLib/FaceDataRecord?format=json";

            // Prepare the face data record
            $faceDataRecord = json_encode([
                "FaceLibType" => "blackFD",
                "FDID" => "1",
                "FPID" => $id
            ]);

            try {
                $client->request('POST', $url, [
                    'auth' => [$device->username, $device->password, 'digest'],
                    'multipart' => [
                        [
                            'name' => 'facedatarecord',
                            'contents' => $faceDataRecord,
                            'headers' => [
                                'Content-Type' => 'application/json'
                            ]
                        ],
                        [
                            'name' => 'faceimage',
                            'contents' => $imagePath,
                            'filename' => 'face_image.jpg',
                            'headers' => [
                                'Content-Type' => 'image/jpeg'
                            ]
                        ]
                    ]
                ]);
            } catch (RequestException $e) {
                Log::error("Failed to upload photo for user $id on device {$device->name}: " . $e);
                return response()->json(['message' => 'Request failed.', 'error' => $e->getMessage()], 500);
            }
        }
    }

    /**
     * Delete a user from all associated devices.
     */
    public function deleteUser($id)
    {
        $devices = AccessControl::all();
        foreach ($devices as $device) {
            $url = "http://{$device->ip_address}:{$device->port}/ISAPI/AccessControl/UserInfo/Delete?format=json";

            try {
                Http::withDigestAuth($device->username, $device->password)
                    ->put($url, [
                        "UserInfoDelCond" => [
                            "EmployeeNoList" => [["employeeNo" => strval($id)]],
                            "operateType" => "byTerminal",
                            "terminalNoList" => [1]
                        ]
                    ]);
            } catch (\Exception $e) {
                Log::error("Failed to delete user $id from device {$device->name}: " . $e->getMessage());
            }
        }
    }

    /**
     * Register or update a member on all associated devices.
     */
    public function putMember($memberId)
    {
        $member = Member::with('membershipPackage')->find($memberId);
        if (!$member || !$member->membershipPackage) {
            Log::error("Member not found or has no associated package for ID: $memberId");
            return;
        }

        // Ensure access_control_ids is an array
        $accessControlIds = $member->membershipPackage->access_control_ids;
        if (is_string($accessControlIds)) {
            $accessControlIds = json_decode($accessControlIds, true);
        }

        if (!is_array($accessControlIds)) {
            Log::error("Invalid access_control_ids format for member ID: $memberId");
            return;
        }

        // Remove duplicates and fetch records
        $accessControlIds = array_unique($accessControlIds);
        $devices = AccessControl::whereIn('id', $accessControlIds)->get();


        $this->putUser(
            'MEM' . $member->id,
            $member->name,
            $member->gender,
            $member->start_date,
            $member->payment_expiry_date,
            $devices
        );

        if ($member->photo) {
            $this->putPhoto('MEM' . $member->id, $member->plain_image, $devices);
        }
    }

    /**
     * Register or update a staff on all associated devices.
     */
    public function putStaff($staffId)
    {
        $staff = Official::find($staffId);
        if (!$staff) {
            Log::error("Staff not found for ID: $staffId");
            return;
        }

        $devices = AccessControl::all();

        $contract_expiry_date = Carbon::parse($staff->joining_date)->addDecade();

        $this->putUser(
            'STF' . $staff->id,
            $staff->name,
            $staff->gender,
            $staff->joining_date,
            $contract_expiry_date,
            $devices
        );

        if ($staff->photo) {
            $this->putPhoto('STF' . $staff->id, $staff->photo, $devices);
        }
    }


    public static function openDoor(AccessControl $device)
    {
        $url = "http://{$device->ip_address}:{$device->port}/ISAPI/AccessControl/RemoteControl/door/1";
        $payload = "
        <RemoteControlDoor>
            <cmd>open</cmd>
            <doorNo>1</doorNo>
        </RemoteControlDoor>";

        try {
            $response = Http::withDigestAuth($device->username, $device->password)
                ->withHeaders(['Content-Type' => 'application/xml'])
                ->send('PUT', $url, ['body' => $payload]);

            if ($response->successful()) {
                Log::info("Door successfully opened for device: {$device->name}");
                return response()->json(['message' => 'Door opened successfully'], 200);
            } else {
                Log::error("Failed to open door for device: {$device->name}, Response: " . $response->body());
                return response()->json(['error' => 'Failed to open door'], $response->status());
            }
        } catch (\Exception $e) {
            Log::error("Failed to open door attached with device: {$device->name}: " . $e->getMessage());
            return response()->json(['error' => 'Unexpected error occurred'], 500);
        }
    }
}
