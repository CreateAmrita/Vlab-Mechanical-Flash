<?php
//header("Pragma: public");
$file_name =$_GET['filename'];
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
header("Content-Type: text/x-csv");
header('Content-Disposition: attachment;filename="'.$file_name.'"'); 

if($_GET['data']){
	$string = $_GET['data'];
	$patterns = array();
	$patterns[0] = "/\[n]/";
	$replacements = array();
	$replacements[0] = "\n";
	$string= preg_replace($patterns, $replacements, $string);
    print $string;
	
}

?>