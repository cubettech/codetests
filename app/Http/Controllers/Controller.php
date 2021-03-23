<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\User;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getMyId()
    {
        $my_id = rand(1111, 9999);

        $user = User::where('my_id', $my_id)->first();
        if ($user) {
            $this->getMyId();
        } else {
            return $my_id;
        }
    }
}
