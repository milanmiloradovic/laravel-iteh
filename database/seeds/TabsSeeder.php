<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class TabsSeeder extends Seeder
{

    public static $brojTabova = 10;
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < TabsSeeder::$brojTabova; $i++) {
            DB::table('tabs')->insert([
                'title' => Str::random(4) . "tab",
                'isShown' => false
            ]);
        }
    }
}
