<?php

namespace App\Http\Controllers;

use App\Tab;
use Illuminate\Support\Facades\DB;
use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    // READ
    public function getTasksID(Request $request)
    {
        $tab_id = $request->input('id_tab');
        $tasks = Task::where('id_tab', $tab_id)->get();

        return response()->json([
            'tasks' => $tasks
        ]);
    }

    public function getTasks()
    {
        $tasks = Task::all();

        return response()->json([
            'tasks' => $tasks
        ]);
    }
    // UPDATE
    public function setDone(Request $request)
    {
        $id_task = $request->input('id_task');
        $done = $request->input('done');
        Task::where('id_task', $id_task)->update(['done' => $done]);
        echo $done;
    }
    // CREATE
    public function addTask(Request $request)
    {
        $title = $request->input('title');
        $id_tab =  DB::table('tabs')
            ->select('id_tab')
            ->where('isShown', 1)
            ->get();
        Task::insert([
            'title' => $title,
            'id_tab' => $id_tab
        ]);
    }
    // DELETE
    public function deleteTask(Request $request)
    {
        $id_task = $request->input('id_task');
        Task::where('id_task', $id_task)->delete();
    }
}
