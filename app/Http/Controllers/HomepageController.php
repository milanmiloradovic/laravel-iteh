<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomepageController extends Controller
{
    public static function pocetna()
    {
        return view('pocetna');
    }
}
