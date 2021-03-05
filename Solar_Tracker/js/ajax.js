var respText;
var time = new Date();
function loadXMLDoc()
{
	var xmlhttp;
	TimeoutCount=0;
	//console.log("xmlUrl "+xmlUrl)
	//console.log("TimeoutCount "+TimeoutCount);
	clearTimeout(timer_id);
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
 
 	 	xmlhttp=new XMLHttpRequest();
// console.log(xmlUrl);
 	 }
	else
 	 {// code for IE6, IE5
  		 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	 }
  	 xmlhttp.onreadystatechange=function()	{
	  
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
		
	//console.log("respdata:",respText);
	//console.log("linkcount",linkcount);
	
			var xmlDoc = xmlhttp.responseXML; 
		   if(respText!=xmlhttp.responseXML){
			  
				respText=xmlhttp.responseXML;
				TimeoutCount=1;
				if(linkcount!=2&&linkcount!=3)
	{
				loadXML(respText);
	}
				
			//if(startFlag==true){
				//loadXMLDoc();
			//startloading()
			//}
		 //}else{
		 //   if(startFlag==true){
				//loadXMLDoc();
				startloading()
		//	}
		//  }
	}
   	 }
	
	else if ( xmlhttp.readyState == 4 &&xmlhttp.status==404)
    {//console.log("inside ajax");
		//if(startFlag==true){
			//loadXMLDoc();
			startloading()
		//}
	}
}
  
xmlhttp.open("GET",xmlUrl+"?id="+ Math.random(),true);
//xmlhttp.setRequestHeader("Content-type","application/xhtml+xml");
xmlhttp.send("");
}

function loadXML(xmldata) {
	//console.log("xmlload");
	//console.log(xmldata);
	TimeoutCount=1;
	var timeData=xmldata.getElementsByTagName('tms');
	timestampArray.push(timeData[0].childNodes[0].nodeValue);
    //timestampArray.push(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds())
    var dhiData=xmldata.getElementsByTagName('dhi');
    DHIArray.push(dhiData[0].childNodes[0].nodeValue);
	var DNIData=xmldata.getElementsByTagName('dni');
    DNIArray.push(DNIData[0].childNodes[0].nodeValue);
    var GHIData=xmldata.getElementsByTagName('ghi');
	GHIArray.push(GHIData[0].childNodes[0].nodeValue);
	var azdata=xmldata.getElementsByTagName('azimuth');
  	AzimuthArray.push(azdata[0].childNodes[0].nodeValue);
   // var decdata=xmldata.getElementsByTagName('declination');
  //	DeclinationArray.push(decdata[0].childNodes[0].nodeValue);
	var longData=xmldata.getElementsByTagName('longitude');
	 LongitudeArray.push(longData[0].childNodes[0].nodeValue);
	 var latData=xmldata.getElementsByTagName('latitude');
	 LatitudeArray.push(latData[0].childNodes[0].nodeValue);
	 var ElevData=xmldata.getElementsByTagName('elevation');
	 ElevationArray.push(ElevData[0].childNodes[0].nodeValue);
	 var unloadData=xmldata.getElementsByTagName('dt');
  	sysDate=unloadData[0].childNodes[0].nodeValue;
	 //pVar=panelData[0].childNodes[0].nodeValue;
	 loadBarChart();
	 displayValues();
	 loadLineChartStrain();
}
