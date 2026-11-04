<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Auth;

class Login extends Controller
{
    //


    public function create(){
        return view("login");
    }

    public function login(Request $request){
        $request->validate([
            "name" => ["required"],
            "password" => ["required"],
        ]);

        if(Auth::attempt($request->all())){
            return response()->json([
                "status" => "200"
            ]);
        }

        else{
            return response()->json([
                "status" => "500"
            ]);
        }
    }
}
