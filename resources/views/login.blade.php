<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('admin-theme/images/favicon.png') }}"> 
	<title>Login - Chain Reg</title>

	<link rel="stylesheet" type="text/css" href="{{ asset('admin-theme/plugins/bootstrap/css/bootstrap.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('admin-theme/plugins/toast-master/css/jquery.toast.css') }}"/>
	<link rel="stylesheet" type="text/css" href="{{ asset('admin-theme/css/style.css') }}">
	<link rel="stylesheet" type="text/css" href="{{ asset('admin-theme/css/colors/purple.css') }}">
    <style>
        .jq-toast-wrap {
            width: 400px;
            max-width: 100%;
            border-radius: 5px !important;
        }
    </style>
</head>

<body>
    <div class="preloader">
        <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
        </svg>
    </div>

    <section id="wrapper">
        <div class="login-register">
            <div class="login-box card entry_card">
                <div class="card-body">

                    <form class="form-horizontal form-material" id="loginform" method="post" action="{{ route('Login') }}">
                        <br>
                        <h3 class="box-title m-b-20 text-center">Login</h3>
                        {{ csrf_field() }}

                        <div class="form-group ">
                            <div class="col-xs-12">
                                <input class="form-control" type="email" required="" placeholder="Username" id="username" name="email" value="{{ old('username') }}"> 
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-xs-12">
                                <input class="form-control" type="password" required="" placeholder="Password" id="password" name="password">
                            </div>
                        </div>

                        <div class="form-group text-center m-t-20">
                            <div class="col-xs-12">
                                <button class="btn btn-info btn-block text-uppercase waves-effect waves-light" type="submit">Log In</button>
                            </div>
                        </div>
                        <div class="form-group text-center m-t-20">
                            <div class="col-xs-12">
                                <a href="{{ route('RegisterIndex') }}">
                                <span class="btn btn-info btn-block text-uppercase waves-effect waves-light">Goto Register</span>
                            </div>
                        </div>
                    </form>                    
                </div>
            </div>
        </div>
    </section>

    <script type="text/javascript" src="{{ asset('admin-theme/plugins/jquery/jquery.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/plugins/bootstrap/js/popper.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/plugins/bootstrap/js/bootstrap.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/js/jquery.slimscroll.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/js/waves.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/js/sidebarmenu.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/plugins/sticky-kit-master/dist/sticky-kit.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/plugins/sparkline/jquery.sparkline.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/js/custom.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/plugins/styleswitcher/jQuery.style.switcher.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/plugins/toast-master/js/jquery.toast.js') }}"></script>
    @include('common.alerts')
</body>

</html>