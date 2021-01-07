<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tab extends Model
{
  protected $table = "tabs";
  protected $primaryKey = "id_tab";
  public $timestamps = false;

  public function tasks()
  {
    return $this->hasMany('App\Task', 'id_tab', "id_tab");
  }
}
