<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Redirect;
use Validator;
use Hash;
use App\Models\User;

class LoginController extends Controller
{

    public function registerindex()
    {
     
        return view('register');
    }

    public function register(Request $request)
    {
        $rules = array(
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6'
        );

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return Redirect::back()->with('msg_error', $validator->errors()->first());
        }

        $references =  User::where('reference_id', $request->reference_id)->get();

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->my_id = $this->getMyId();
        $user->reference_id = $request->reference_id ? $request->reference_id : null;

        if ($user->save()) {

            if($request->reference_id){
                
                $reference_person = User::where('my_id', $request->reference_id)->first();

                if($reference_person){
                    if($references->count()){

                        if($references->count() == 1){

                            $reference_person->update([
                                'reference_point' => $reference_person->reference_point + 10
                                ]);
                            
                            
                        }

                        else{
                            $reference_person->update([
                                'reference_point' => $reference_person->reference_point + 5
                                ]);
                        }
    
                    }
                    else{
                        $reference_person->update([
                            'reference_point' => 15
                            ]);
                    }
                }
            }

            return redirect()->route('Login');
        }
        return Redirect::back()->with('msg_error', 'Something went wrong');
    }

    public function loginindex()
    {
        return view('login');
    }

    public function login(Request $request)
    {
        $rules = array(
            'email' => 'required|email',
            'password' => 'required|min:6',
        );

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return Redirect::back()->with('msg_error', $validator->errors()->first());
        }

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            return redirect()->route('Dashboard');
        } else {
            return Redirect::back()->with('msg_error', 'Invalid Login Credentials');
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();
        return redirect('/');
    }
}
