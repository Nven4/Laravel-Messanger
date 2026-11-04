<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Persons extends Authenticatable
{
    //

    protected $table = "persons";
    protected $fillable = ["name", "password"];
}
