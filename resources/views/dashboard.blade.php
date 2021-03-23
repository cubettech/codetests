@extends('common.app')

@php
    $page_title = 'Leader Board';
@endphp

@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="table-responsive m-t-40" style="overflow:hidden">
                    <table id="myTable" class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Id</th>
                                    <th>Referred By</th>
                                    <th>reference Point</th>
                                </tr>
                            </thead>
                            <tbody>
                            @foreach ($users as $key => $user)
                                <tr >
                                    <td>{{ $key + 1 }}</td>
                                    <td>{{ $user->name}}</td>
                                    <td>{{ $user->email }}</td>
                                    <td>{{ $user->my_id }}</td>
                                    <td>{{ $user->referred ? $user->referred->name : 'No One Referred' }}</td>
                                    <td>{{ $user->reference_point }}</td>
                                </tr> 
                                @endforeach                              
                            </tbody>
                        </table>

                      
                        </div> 
                  
                    </div>
                </div>
            </div>
        </div>
    </div> 

@endsection

@section('foot_scripts')
    
@endsection
