<?php

namespace App\Http\Controllers;

use App\Services\MessageService;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MessageController extends Controller
{
    public function index()
    {
        try {
            $balance = MessageService::getBalance();
            return Inertia::render('Messenging/index', ['sms_balance' => $balance['balance']['current']]);
        } catch (Exception $e) {
            return Inertia::render('Messenging/index', ['sms_balance' => -1]);
        }
    }

    public function message(Request $request)
    {
        // Validate the request
        $request->validate([
            'contacts' => 'required|array|min:1',
            'message' => 'required|string|min:5',
        ]);

        $messageResponse = MessageService::sendMessage($request->contacts, $request->message);

        session()->flash('message', "Message sent successfully...");

        // Return API response
        return redirect()->back()->with('response', $messageResponse);
    }
}
