<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Persons;
use Hash;
use Auth;

class Register extends Controller
{
    //

    public function create(){
        return view("register");
    }

    public function register(Request $request){
        $request->validate([
            "name" => "required",
            "password" => "required"
        ]);

        Persons::create([
            "name" => $request->name,
            "password" => Hash::make($request->password),
        ]);

        return response()->json([
            "status" => "200"
        ]);
    }
}
