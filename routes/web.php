<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/register', '\App\Http\Controllers\LoginController@registerindex')->name('RegisterIndex');
Route::post('/register', '\App\Http\Controllers\LoginController@register')->name('Register');
Route::get('/login', '\App\Http\Controllers\LoginController@loginindex')->name('LoginIndex');
Route::post('/login', '\App\Http\Controllers\LoginController@login')->name('Login');

Route::group(['middleware' => ['auth']], function () {
    Route::get('/', '\App\Http\Controllers\DashboardController@dashboard')->name('DashboardIndex');
    Route::get('/dashboard', '\App\Http\Controllers\DashboardController@dashboard')->name('Dashboard');
    Route::get('/logout', '\App\Http\Controllers\LoginController@logout')->name('Logout');
});