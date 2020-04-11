<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
    public function index()
    {
        return Task::all();
    }

    public function show($id)
    {
        //return Task::find($id);//->orderByDesc('id');
        $threads = DB::select("SELECT *
        FROM tasks
       WHERE owner_id = " . $id . "
       ORDER BY id"); //todo make this not raw query never
        return $threads;
    }

    public function store(Request $request)
    {
        return Task::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        $task->update($request->all());

        return $task;//->orderByDesc('id');//wont return in postman
    }

    public function delete(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        $task->delete();

        return 204;
    }
}
