<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class TasksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 45; $i++) {

            DB::table('tasks')->insert([
                'title' => Str::random(4),
                'id_tab' => rand(1, TabsSeeder::$brojTabova),
                'creation_date' => time()
            ]);
        }
    }
}
