<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    protected $table = 'registration';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'reference_id',
        'referred_by',
        'password'
    ];

    /**
     * Get the Points
     */
    public function getPoints()
    {
        return $this->hasMany('App\ReferencePoint','user_id','id');
    }
    
}