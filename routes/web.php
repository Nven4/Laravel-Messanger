<?php

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;
use App\Http\Controllers\Register;
use App\Http\Controllers\Login;
use App\Http\Controllers\Main;
use App\Http\Controllers\Validate;
use App\Http\Controllers\ImageAnimal;
use App\Models\Persons;

Route::controller(Main::class)
->group(function(){
    Route::get("/", "create");
    Route::get("/main", "create");
    Route::post("/main", "send");
    Route::post("/", "send");
});

Route::get("/getmsg", [Main::class, "get"]);

Route::get("/register", [Register::class, "create"]);

Route::post("/register", [Register::class, "register"]);

Route::post("/test", [Register::class, "register"]);

Route::post("/checkname", [Validate::class, "checkNameExist"]);

Route::get("/login", [Login::class, "create"]);

Route::post("/login", [Login::class, "login"]);

Route::get("/logout", [Main::class, "logout"]);