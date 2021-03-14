<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Registration;
use App\ReferencePoint;
use DB;

class ReferenceController extends Controller
{
    public function register(Request $request){
        $pointsArray= array(15,10,5);
        $this->response['data'] = array();
        $input = $request->input();
        $referenceId = Str::random(3)."-".time();
        $referedBy = 0;
        if(isset($input['user_reference'])){
          $userReference =   $input['user_reference'];
          $getUser = $this->getUserReference($userReference);
          if(isset($getUser)){

            $referedBy = $getUser->id;
          }
          
        } 
        $registerData = array(
            'name' => $input['name'],
            'email'  => $input['email'],
            'reference_id' => $referenceId,
            'referred_by' => $referedBy,
            'password' => Hash::make($input['password'])
        );
        $referenceObj= new Registration($registerData);
		$referenceObj->save();
        if ( isset($referenceObj->id) ) {
            
            if(isset($getUser) ){
                if($getUser->referred_by == 0){
                    $this->savePoint($getUser->id, $referenceObj->id, $pointsArray[0]);
                }else{
                    $this->savePoint($getUser->id, $referenceObj->id, $pointsArray[0]);
                    $getUserB = $this->getUserById($getUser->referred_by);
                  if($getUserB->referred_by == 0){
                      $this->savePoint($getUserB->id, $referenceObj->id,$pointsArray[1]);
                  }
                  else{ 
                    $this->savePoint($getUserB->id, $referenceObj->id,$pointsArray[1]);
                    $getUserC = $this->getUserById($getUserB->referred_by);
                    $this->savePoint($getUserC->id, $referenceObj->id, $pointsArray[2]);
                  }
                }
      
                
              }
            
            $this->response['status'] = 'succcess';
            array_push( $this->response['data'], array(
                'id' => $referenceObj->id,
                'reference_id' => $referenceId
            ));
        }
        else{
            $this->response['status'] = 'error';
            array_push($this->response['data'], 'Failed to add User.' );
        }
        
        return response()->json( $this->response );
    }

    private function getUserReference( $referenceId){
       return Registration::select('id','referred_by')
                    ->where('reference_id','=', $referenceId)->first();
    }

    private function savePoint( $userId, $referredUser, $points){
        $reference                = new ReferencePoint();
        $reference->user_id       = $userId;
        $reference->points  = $points;
        $reference->referred_user = $referredUser;
		$reference->save();
     }

     private function getUserById( $id ){
        return  Registration::select('id','referred_by')
        ->where('id', $id)->first();
     }

    public function getBoard(){
       $register = Registration::select('name','id')->get();
       $userDetails = array();
       foreach( $register as $r){
        $data = array(
            'name' => $r->name,
            'id' => $r->id,
            'Points' => $r->getPoints->sum('points'),
        );
        array_push($userDetails, $data);
       }
       return response()->json(['data' => $userDetails]);
    }
}
