<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Message;
use Auth;

class Main extends Controller
{
    //

    public function create(){
        if(Auth::check()){
            return view("main");
        }

        else{
        return redirect("/login");
        }
    }

    public function send(Request $request){
        $message = new Message;

        $message->name = Auth::user()->name;
        $message->text = $request->input("text");

        $message->save();

        return response()->json([
            "status" => "200",
        ]);
    }

    public function get(){
        return response()->json([
            "result" => Message::all(),
        ]);
    }
}
