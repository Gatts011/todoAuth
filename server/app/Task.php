<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['owner_id','title'];
    // protected $fillable = ['owner_id','title'];
}
