<?php

namespace App\Console\Commands;

use App\Jobs\SendMessage;
use App\Models\Member;
use Carbon\Carbon;
use Illuminate\Console\Command;

class SendBirthdayMessage extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:send-birthday-message';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command is used to send birthday messages to the members of the specified gym.';

    /**
     * Execute the console command.
     */
    public function handle()
    {

        $today = Carbon::today()->setTimezone("Asia/Kathmandu");

        $members = Member::whereMonth('date_of_birth', $today->month)
            ->whereDay('date_of_birth', $today->day)
            ->get();

        // Send custom birthday messages to each member
        foreach ($members as $member) {
            $message = "Happy Birthday! " . $member->name . ". Yeti Fitness family wishes you for a happiness, success, proper fitness and a great year ahead!";

            // Send the birthday message using a messaging service
            dispatch(new SendMessage($member->phone, $message));
        }

        // Log the number of members who received the birthday message
        $this->info(count($members) . " members received birthday messages.");
    }
}
