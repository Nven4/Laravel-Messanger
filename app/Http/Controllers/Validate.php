<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Persons;

class Validate extends Controller
{
    //

    public function checkNameExist(Request $request){
        return response()->json([
            $request->fieldcontent => Persons::where("name", $request->fieldcontent)->exists()
        ]);
    }
}
