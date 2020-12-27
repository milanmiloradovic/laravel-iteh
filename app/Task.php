<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    const CREATED_AT = 'creation_date';
    const UPDATED_AT = 'finished_date';
    protected $table = "tasks";
    protected $primaryKey = "id_task";
}
