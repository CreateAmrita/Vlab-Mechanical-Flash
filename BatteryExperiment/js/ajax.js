var respText;
var expt_finish;
function loadXMLDoc()
{
	var xmlhttp;
	clearTimeout(timer_id);
	
		if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
		
		}
		else
		{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		
		}
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				
			if(calebcount>0){
			  var xmlDoc = xmlhttp.responseXML;
			  if(respText!=xmlhttp.responseXML){
				respText=xmlhttp.responseXML;				
				loadXML(respText);
				if((calebcount==1)){
					loadComplete();
					startloading();
				}
			 }
			 else{
				 if((calebcount==1)){
			     startloading();  
				 }
			  }
		  }else if (xmlhttp.readyState == 4 &&  xmlhttp.status==404){				
				if((calebcount==1)){
					startloading();			
				}
			}
	}
}
		xmlhttp.open("GET",xmlUrl,true);
		xmlhttp.setRequestHeader("Content-type","application/xhtml+xml");
		xmlhttp.send("");
}
function loadXML(xmldata) {
	//console.log("hi there=");
	var timeData=xmldata.getElementsByTagName('tms');
	timestampArray.push(timeData[0].childNodes[0].nodeValue)
	var strainData=xmldata.getElementsByTagName('strain');
	strArray1.push(strainData[0].childNodes[0].nodeValue);   
	var stressData=xmldata.getElementsByTagName('load');
	stressArray1.push(stressData[0].childNodes[0].nodeValue);	
	var youngsData=xmldata.getElementsByTagName('temp');
	yvalArray2.push(youngsData[0].childNodes[0].nodeValue);
	var dt=xmldata.getElementsByTagName('dt');
	sysDate=dt[0].childNodes[0].nodeValue;	
	displayValues();
	loadLineChartStrain();
}
