<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ImageAnimal extends Controller
{
    //

    public function __invoke(Request $request){
        return match($request->input("animal")){
            "dog" => response()->json(["photourl" => "https://hvost.news/upload/medialibrary/4a1/korgi.jpg", "body" => "dog"]),
            "cat" => response()->json(["photourl" => "https://i.pinimg.com/736x/f1/71/f2/f171f29e74e3dabb869492a33f23bdf0.jpg", "body" => "cat"]),
            default => response()->json(["code" => "404"])
        };
    }
}
