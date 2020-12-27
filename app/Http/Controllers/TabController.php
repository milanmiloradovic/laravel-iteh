<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tab;

class TabController extends Controller
{
    public function getTabs()
    {
        $tabs = Tab::all();

        return response()->json([
            'tabs' => $tabs
        ]);
    }
    public function hideAllTabs()
    {
        echo Tab::where('isShown', 1)->update(['isShown' => 0]);
    }
    public function setShownTab(Request $request)
    {
        $this->hideAllTabs();
        $tab_id = $request->input('id_tab');
        Tab::where('id_tab', $tab_id)->update(['isShown' => 1]);
    }
}
