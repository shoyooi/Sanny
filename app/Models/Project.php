<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'description',
        'image_url',
        'video_url',
        'link',
        'category',
        'span',
        'year',
        'software_used',
        'duration',
        'client_name',
    ];
}
