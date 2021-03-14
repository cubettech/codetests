<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReferencePoint extends Model
{
    protected $table = 'reference_points';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'points',
        'referred_user'
    ];

   /**
     * Get microapp.
     */
    public function microapp()
    {
        return $this->belongsTo('App\Registration', 'user_id');
    }
}
