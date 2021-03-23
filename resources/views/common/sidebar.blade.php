<div class="scroll-sidebar">
    <div class="user-profile">
        <div class="profile-text"> 

    

            <a href="{{ route('Logout') }}" class="" data-toggle="tooltip" title="Logout"><i class="mdi mdi-power"></i></a>
        </div>
    </div>
	@php
		$view_menu = config('menu.menu');
	@endphp
    <nav class="sidebar-nav">
        <ul id="sidebarnav">
            <li class="nav-devider"></li>
            @foreach ($view_menu as $item)
                @if ($item['sub'])
                <li> <a class="has-arrow waves-effect waves-dark" aria-expanded="false"><i class="mdi mdi-{{ $item['icon'] }}"></i><span class="hide-menu">{{ $item['text'] }}</span></a>
                    <ul aria-expanded="false" class="collapse">
                    	@foreach ($item['sub_menu'] as $sub_item)
                    	<li><a href="{{ route($sub_item['route']) }}">{{ $sub_item['text'] }}</a></li>
                    	@endforeach
                    </ul>
                </li>
                @else
                <li> <a class="waves-effect waves-dark" href="{{ route($item['route']) }}" aria-expanded="false"><i class="mdi mdi-{{ $item['icon'] }}"></i><span class="hide-menu">{{ $item['text'] }}</span></a>
                </li>
                @endif
            @endforeach
        </ul>
    </nav>
</div>
