<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tab extends Model
{
    protected $table = "tabs";
    protected $primaryKey = "id_tab";
    public $timestamps = false;
}
