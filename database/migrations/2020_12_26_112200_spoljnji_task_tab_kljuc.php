<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SpoljnjiTaskTabKljuc extends Migration
{


    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasColumn('tasks', 'id_tab')) {
            Schema::table('tasks', function (Blueprint $table) {
                $table->unsignedInteger('id_tab');
                $table->foreign('id_tab')->references('id_tab')->on('tabs')->onUpdate('cascade')->onDelete('cascade');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tasks', function (Blueprint $table) {
            $table->dropForeign('task_id_tab_foreign');
        });
    }
}
