<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomepageController@pocetna');
Route::get('/forma', 'FormaPageController@forma');
Route::get('/todos', 'TodosPageController@todos');


Route::get('todos/tabs/get-tabs', 'TabController@getTabs');
Route::put('todos/tabs/show-tab', 'TabController@setShownTab');

Route::get('todos/tasks/get-tasks', 'TaskController@getTasks');
Route::get('todos/tasks/get-tasks-id', 'TaskController@getTasksID');

Route::put('todos/tasks/done-task', 'TaskController@setDone');

Route::post('todos/tasks/create-task', 'TaskController@addTask');

Route::delete('todos/tasks/delete-task', 'TaskController@deleteTask');
