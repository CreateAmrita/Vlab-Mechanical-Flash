<?php


function download_page($path){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,$path);
       curl_setopt($ch, CURLOPT_FAILONERROR,1);
	   
	   // importanttt******************
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION,1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
		
		
        curl_setopt($ch, CURLOPT_TIMEOUT,90);
	    $retValue = curl_exec($ch);                      
        curl_close($ch);
        if(($retcode>400))
		{
			//echo "sucess ".$retcode;//Network error or content blocked....
			exit();
		}
        return $retValue;
}


$file_count =$_GET['loadLink'];
$sliderVal=$_GET['sliderval'];
if($sliderVal==""){
$sliderVal=0;
}
$file_count =$_GET['loadLink'];


if($file_count==1){
header('Content-type: application/xml; charset="utf-8"',true);
 $sXML = download_page('http://amrita.vlab.co.in/RT/MEC/102/0080/creep/web/1'); 
  // $sXML =download_page('http://192.168.171.69/VLAB/vlab/MEC/ENG/CreepTest/youngs1.xml');
   
}
else if($file_count==2){//calibrate
	//$file ="dataXML.xml";
	header('Content-type: application/xml; charset="utf-8"',true);
	  $sXML = download_page('http://amrita.vlab.co.in/RT/MEC/102/0080/creep/web/0');
  //$sXML =download_page('http://192.168.171.69/VLAB/vlab/MEC/ENG/CreepTest/youngs2.xml');

}
else if($file_count==3){//set temparature
   
   header('Content-type: application/xml; charset="utf-8"',true);
   $sXML = download_page('http://amrita.vlab.co.in/RT/MEC/102/0080/creep/web/1/'.$sliderVal);
}
else
{
	header('Content-type: application/xml; charset="utf-8"',true);
	$sXML = download_page('http://amrita.vlab.co.in/RT/MEC/102/0080/creep/web/0');
	// $sXML =download_page('http://192.168.171.69/VLAB/vlab/MEC/ENG/CreepTest/youngs2.xml');
}


if($file_count>0){
	
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

}