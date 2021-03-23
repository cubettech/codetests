<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('admin-theme/images/favicon.png') }}">    
    <title>{{ $page_title ? $page_title.' - Chain Reg' : 'Chain Reg' }}</title>
	
	<link rel="stylesheet" type="text/css" href="{{ asset('admin-theme/plugins/bootstrap/css/bootstrap.min.css') }}"/>
	<link rel="stylesheet" type="text/css" href="{{ asset('admin-theme/plugins/toast-master/css/jquery.toast.css') }}"/>
	<link rel="stylesheet" type="text/css" href="{{ asset('admin-theme/css/style.css') }}"/>
    
	<link rel="stylesheet" type="text/css" href="{{ asset('admin-theme/css/colors/purple.css') }}" id="theme"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" />    
    @yield('ex_css')
    <link rel="stylesheet" type="text/css" href="{{ asset('admin-theme/css/devx.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ asset('admin-theme/css/product.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ asset('admin-theme/plugins/multiSelect/jquery.multiselect.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ asset('admin-theme/plugins/multiSelect/multi-select.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ asset('admin-theme/plugins/sweetalert/sweetalert.css') }}"/>
    <link href="https://code.jquery.com/ui/1.11.3/themes/smoothness/jquery-ui.css"/>
    
    
</head>

<body class="fix-header fix-sidebar card-no-border">

	<div class="preloader">
        <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" /> </svg>
    </div>

    <div id="main-wrapper">

        <aside class="left-sidebar">
            @include('common.sidebar') 
        </aside>

        <div class="page-wrapper">
            <div class="row page-titles">
                <div class="col-md-5 align-self-center">
                    <h3 class="text-themecolor">{{ $page_title }}</h3>
                </div>
                <div class="col-md-7 align-self-center">
                    <ol class="breadcrumb">
                        @yield('breadcrumb')
                    </ol>
                </div>
            </div>
            <div class="container-fluid">
                <!-- Start Page Content -->

                @yield('styls')
                @yield('content')
                
                <!-- End Page Content -->
            </div>
            <footer class="footer">
                © 2020 Chain Reg.in
            </footer>
        </div>
    </div>

	<!-- script -->
    <script src="https://unpkg.com/jquery@2.2.4/dist/jquery.js"></script>
	<script type="text/javascript" src="{{ asset('admin-theme/plugins/jquery/jquery.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/plugins/bootstrap/js/popper.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/plugins/bootstrap/js/bootstrap.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/js/jquery.slimscroll.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/js/waves.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/js/sidebarmenu.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/plugins/sticky-kit-master/dist/sticky-kit.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/plugins/sparkline/jquery.sparkline.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/js/custom.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/js/jquery.validate.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/plugins/datatables/jquery.dataTables.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/plugins/styleswitcher/jQuery.style.switcher.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/plugins/toast-master/js/jquery.toast.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/plugins/multiSelect/jquery.multiselect.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/plugins/multiSelect/jquery.multi-select.js') }}"></script>
      <script type="text/javascript" src="{{ asset('admin-theme/plugins/sweetalert/sweetalert.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin-theme/plugins/sweetalert/jquery.sweet-alert.custom.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
   
<script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
<script type="text/javascript" src="{{ asset('admin-theme/js/jquery.nestable.js') }}"></script>


   <!-- added script nd style -->
    <link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
    <script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
    @yield('foot_scripts')
    @include('common.alerts')
    
    <script>
        $(document).ready(function() {
            $(document).on('submit', 'form.onets', function(event) {
                $(this).find(':submit').prop('disabled', true);
                console.log('0007');
            });
        });
    </script>

</body>
</html>
