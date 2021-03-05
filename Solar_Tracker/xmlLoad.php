<?php
function download_page($path){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,$path);
       curl_setopt($ch, CURLOPT_FAILONERROR,1);
	   
	   // importanttt******************
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION,1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
		curl_setopt($ch, CURLOPT_TIMEOUT, 120);
	    $retValue = curl_exec($ch);                      
		curl_close($ch);
        return $retValue;
}

$file_count =$_GET['loadLink'];
//if($file_count==3){
//$SliderValue=$_GET['sliderval'];}
 
if($file_count==1){//start streaming
	header('Content-type: application/xml; charset="utf-8"',true);
 	$sXML = download_page('http://amrita.vlab.co.in/RT/MEC/147/0080/solar/host/1'); 
 	//$sXML =download_page('192.168.215.147/panel/tracking/1/0'); 
}
else if($file_count==2){//stop
	header('Content-type: application/xml; charset="utf-8"',true);
	$sXML = download_page('http://amrita.vlab.co.in/RT/MEC/147/0080/solar/host/0');
 	//$sXML =download_page('192.168.215.147/panel/tracking/1/1'); 
}
else if($file_count==3){//browser exit
	header('Content-type: application/xml; charset="utf-8"',true);
	$sXML = download_page('http://amrita.vlab.co.in/RT/MEC/147/0080/solar/host/0');
 	//$sXML =download_page('192.168.215.147/panel/tracking/1/1'); 
}

else
{
	header('Content-type: application/xml; charset="utf-8"',true);
	$sXML = download_page('http://amrita.vlab.co.in/RT/MEC/147/0080/solar/host/0');
	//$sXML = download_page('http://amrita.vlab.co.in/RT/MEC/147/0080/panel/tracking/1/0');
}
//if($file_count>0){
$xml =simplexml_load_string($sXML);
$strVal='';
foreach($xml->children() as $child)
{
	foreach($child->children() as $child2)
  	{
		if($child2->getName()=="Name"){
		 	$node_Name=strtolower(trim($child2));
		}
		else if($child2->getName()=="Value")
			$Val=$child2;	
	}	
  		$strVal=$strVal.'<'.$node_Name.'>'.$Val.'</'.$node_Name.'>';
}
$newXML='<DATA><dt>'.date("d/m/Y").'</dt><evt id="1">';
//////      
$newXML=$newXML.$strVal.'<current>5</current><tms>'.strtotime("now").'</tms></evt></DATA>';
echo $newXML;
//exit();
//}
