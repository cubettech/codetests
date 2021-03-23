<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;

class DashboardController extends Controller
{
    public function dashboard()
    {
       $users = User::OrderBy('reference_point','DESC')->with('referred')->get();
       return view('dashboard', [
           'users' => $users,
       ]);
    }
}
