<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{

    protected $table = "tasks";
    protected $primaryKey = "id_task";
    const CREATED_AT = 'creation_date';
    const UPDATED_AT = 'finished_date';

    public function tab()
    {
        return $this->belongsTo('App\Task', 'id_tab', "id_tab");
    }
}
