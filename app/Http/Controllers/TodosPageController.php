<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TodosPageController extends Controller
{
    public static function todos()
    {
        return view('todos');
    }
}
