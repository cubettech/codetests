<?php
	header('Content-type: text/css');
	echo '/** 
  Theme Name: Innovative Marry
  Theme URI:  http://innovativemarry.com/
  Version: 1.0
  Author: Ajeesh vijay (the Techsrishti team)
  Author URI: http://www.techsrishti.com
  Tags: custom-background, two-columns, fixed-width, right-sidebar, light, green, dark
  License: GNU General Public License v2.0 
  License URI: http://www.gnu.org/licenses/gpl-2.0.html
  Description: Very simple and beautiful design. 
*/
 ';
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
	
	// Turn files output buffering on -------------------------------------------------------
	ob_start("compress");

		// css files
		include('./im_theme.css');
		// if(@$_GET['/']!=''){

		// 	$css_files=explode(',', $_GET['/']);
		// 	foreach ($css_files as $key => $val) {

		// 		if (file_exists(dirname(__FILE__).'/'.$val.'.css')) {
		// 			include('./'.$val.'.css');
		// 		}
		// 	}
		// }
	
	ob_end_flush();
