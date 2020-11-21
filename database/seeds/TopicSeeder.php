<?php

use App\Topic;
use Illuminate\Database\Seeder;

class TopicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Topic::firstOrCreate(['name' => 'python', 'slug' => 'python_slug']);
        factory(Topic::class, 10)->create();
    }
}
