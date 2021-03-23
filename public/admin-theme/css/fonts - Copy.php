<?php
header('Content-type: text/css');
// Compress function --------------------------------------------------------------------
function compress($buffer) {
	$buffer = preg_replace('#\[id[^\]]+\]#', '', $buffer);
	/* #dummy repalce */
	//$buffer = preg_replace('/(^|\s)#(.*)([;])/', '', $buffer);

	/* remove comments */
	$buffer = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $buffer);

	/* remove tabs, spaces, newlines, etc. */
	$buffer = str_replace(array("\r\n", "\r", "\n", "\t",'    ', '    '), '', $buffer);
	return $buffer;
}

function _c($string,$req){
	if(false !== stripos($string, $req)){ return true; }else{ return false; }
}
$browser=$_SERVER['HTTP_USER_AGENT'];
$o='@charset "utf-8";';
// Chrome----------------------
// if(!_c($browser,'chrome')){
// $o .= "
// @font-face {
// 	font-family: 'nexa_lightregular';
// 	src: url('./fonts/nexa_light-webfont.svg') format('svg');
// 	font-weight: normal;
// 	font-style: normal;
// }

// @font-face {
// 	font-family: 'Ecomm-icon';
// 	src:url('fonts/Ecomm-icon.svg') format('svg');
// 	font-weight: normal;
// 	font-style: normal;
// }

// ";
// }

// Mozilla -----------------------------------------------
// if(_c($browser,'Firefox') || _c($browser,'chrome')){
// $o .= "
// @font-face {
// 	font-family: 'nexa_lightregular';
// 	src:url('./fonts/nexa_light-webfont.ttf') format('truetype');
// 	font-weight: normal;
// 	font-style: normal;
// }
// @font-face {
// 	font-family: 'Ecomm-icon';
// 	src:url('fonts/Ecomm-icon.ttf') format('truetype');
// 	font-weight: normal;
// 	font-style: normal;
// }
// ";
// }
// Internet Explorer -----------------------------------------------
// if(_c($browser,'Trident') || _c($browser,'explorer') || _c($browser,'ie')){

$____url = 'https://www.Ecomm.com/theme/contents/css/fonts/';
$o .= "
@font-face {
	font-family: 'nexa_lightregular';
	src: url('{$____url}nexa_light-webfont.eot');
	src: url('{$____url}nexa_light-webfont.eot?#iefix') format('embedded-opentype'),
		 url('{$____url}nexa_light-webfont.woff') format('woff'),
		 url('{$____url}nexa_light-webfont.ttf') format('truetype');
	font-weight: normal;
	font-style: normal;
}
@font-face {
	font-family: 'Ecomm-icon';
	src:url('{$____url}Ecomm-icon.eot?g342ck');
	src:url('{$____url}Ecomm-icon.eot?#iefixg342ck') format('embedded-opentype'),
		url('{$____url}Ecomm-icon.woff?g342ck') format('woff'),
		url('{$____url}Ecomm-icon.ttf?g342ck') format('truetype');
	font-weight: normal;
	font-style: normal;
}

";
// }

// Safari -----------------------------------------------
// if(_c($browser,'Safari') && !_c($browser,'chrome')){
// 	$o .= "
// 	@font-face {
// 		font-family: 'nexa_lightregular';
// 		src:url('./fonts/nexa_light-webfont.ttf') format('truetype');
// 		font-weight: normal;
// 		font-style: normal;
// 	}
// 	@font-face {
// 		font-family: 'Ecomm-icon';
// 		src:url('fonts/Ecomm-icon.ttf?g342ck') format('truetype');
// 		font-weight: normal;
// 		font-style: normal;
// 	}

// 	";
// }

$o .=file_get_contents('./fonts-class.css');


// $o = preg_replace('#\[id[^\]]+\]#', '', $o);
/* remove comments */
// $o = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $o);
/* remove tabs, spaces, newlines, etc. */
// echo str_replace(array("\r\n", "\r", "\n", "\t", '  ', '    ', '    '), '', $o);
echo $o;