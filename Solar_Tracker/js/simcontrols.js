var flagA=0;
var viewFlag=1;
var startFlag=false;
var loadflag=0;
var startbtn = 0;
var timer_id;
var imageFlag=false;
var calebFlag=false;
var utmvar=5;
var xmlloadCount=1;
var numPonits;
var clickcount;
var loadlink=0;
var x1=0,x2=0,y1=0;y2=0;
var GUI_containerArray=["winContentLine","winContentRose","winContentBar","winContentVideo"]
var GUI_titleArray=["tileWindow1","tileWindow2","tileWindow3","tileWindow4"];
var slider_val=0
var timestampArray=new Array();
var actloadArr;
var EfficiencyArray=new Array();
var PowerArray=new Array();
var powArray=new Array();
var AngleArray=new Array();
var PanelArray=new Array();
var EfficiencyArr =new Array();
var exportData=1;
var exportfileName="Solar_Tracker";
var unloadVal=0;
var sysDate;
var actloadVar;
var currntVar;
var linkcount=0;
var IntensityArray=[];
var VoltageArray=[];
var CurrentArray=[];
var PowerArray=[];
var AzimuthArray=[];
var ElavationArray=[];
var GHIArray=[];
var DNIArray=[];
var DHIArray=[];
var DeclinationArray=[];
var LongitudeArray=[];
var LatitudeArray=[];
var ElevationArray=[];
var TrackAngle=0;
var tangle=0;
//var Angle=-45;
var rcount=1;	
var pVar;
var Rotflag=false;
var IEexportLoc=simPath+"download.php?data=";
var CsvContent="data:application/csv;charset=utf-8,"
var tickcount=0,TimeoutCount=0;
var myVar=0;
document.getElementById("videoLivePos").style.visibility="hidden";
AlertImage();
$(document).ready (function(){
//AutoRotateimag();
//TrackIntensity();
});
function Unloadfn()
{
	linkcount=3;
	xmlUrl=simPath+"xmlLoad.php?loadLink="+linkcount;
	loadXMLDoc();
}
function StartStreaming()
{   
	document.getElementById("export").disabled=false;
	document.getElementById("Start").disabled=true;
	myVar = setInterval(myTimer, 1000);
	tickcount=0;
	if(startFlag==false)
	{
		
		
		//console.log("Stop");
		
		linkcount=1;
		xmlUrl=simPath+"xmlLoad.php?loadLink="+linkcount;
		loadXMLDoc();
		clearArrayVal();
		//Rotateimag1();	
		Rotflag=true;
	}
	else
	{
		linkcount=2;
		xmlUrl=simPath+"xmlLoad.php?loadLink="+linkcount;
		loadXMLDoc();
		//console.log("StoP");
		clearTimeout(timer_id);
		InitialRotation();
		
	}
	
}
function myTimer()
{
	console.log("xml generated-",TimeoutCount);
	console.log("Time In Seconds-",tickcount);
	tickcount++;
	if(TimeoutCount>0)
	{  // console.log("TimeoutCount..in",TimeoutCount);
		TimeoutCount=0;
		tickcount=0;
		document.getElementById("Start").disabled=false;
		if(linkcount==1){
			startFlag=true;
			document.getElementById("Start").value="Stop streaming live data";
		}else{
			startFlag = false;
			document.getElementById("Start").value="Start streaming live data";
		}
		//alert("Success");
		
		
		clearInterval(myVar);
		
	}
	else if(tickcount==250&&TimeoutCount==0)
	{   document.getElementById("Start").disabled=false;
		if(linkcount==1){
			startFlag=false;
			document.getElementById("Start").value="Start streaming live data";
			
		}else{
			startFlag = true;
			document.getElementById("Start").value="Stop streaming live data";
			
		}
		alert("Unable to communicate with the Remote Device");
		clearInterval(myVar);
	}
	
}
function Rotateimag1()
{
	//console.log("Rotate ");
	//Rotflag=false;
		var AzAngle=AzimuthArray[AzimuthArray.length-1];
		
		//var newAng=90-ElAngle;
		//var Ang=90-newAng;
		//console.log("Ang",Ang);
		//console.log("AzAngle:",AzAngle);
		
		$("#Pyrano").css(
			{
				'-webkit-transform-origin': '58%  88%', 
				'transform-origin':'58% 88%',
				 'transition-duration':'2s',
  				'transition-delay':'1s',
				'-moz-trans-form':'rotate('+AzAngle+'deg) ',
				'-webkit-transform':'rotate('+AzAngle+'deg)',
				'-o-transform':'rotate('+AzAngle+'deg)',
				'-ms-transform':'rotate('+AzAngle+'deg)',
				'transform': 'rotate('+AzAngle+'deg) ',
			});
				var rid=setTimeout(rotimg, 1000);	

		

}
function Rotateimag2()
{
	var ElAngle=ElevationArray [ElevationArray.length-1];
	//console.log("elAngle:",ElAngle);
	$("#Pyheliometer").css(
	{
		    'transition-duration':'2s',
  			'transition-delay':'1s',
			'-webkit-transform-origin': '46% 48%', 
			'transform-origin':'46% 48%',
			'-moz-trans-form':'rotate('+ElAngle+'deg) ',
			'-webkit-transform':'rotate('+ElAngle+'deg)',
			'-o-transform':'rotate('+ElAngle+'deg)',
			'-ms-transform':'rotate('+ElAngle+'deg)',
			'transform': 'rotate('+ElAngle+'deg) ',
			
	});
	
			
}
function InitialRotation()
{
	$("#Pyheliometer").css(
	{
		    'transition-duration':'2s',
  			'transition-delay':'1s',
			'-webkit-transform-origin': '46% 48%', 
			'transform-origin':'46% 48%',
			'-moz-trans-form':'rotate('+0+'deg) ',
			'-webkit-transform':'rotate('+0+'deg)',
			'-o-transform':'rotate('+0+'deg)',
			'-ms-transform':'rotate('+0+'deg)',
			'transform': 'rotate('+0+'deg) ',
			
	});
	$("#Pyrano").css(
			{
				'-webkit-transform-origin': '58%  88%', 
				'transform-origin':'58% 88%',
				 'transition-duration':'2s',
  				'transition-delay':'1s',
				'-moz-trans-form':'rotate('+0+'deg) ',
				'-webkit-transform':'rotate('+0+'deg)',
				'-o-transform':'rotate('+0+'deg)',
				'-ms-transform':'rotate('+0+'deg)',
				'transform': 'rotate('+0+'deg) ',
			});
			var rid=setTimeout(rotimg, 1000);	
}
function rotimg()
{
		$("#Pyheliometer").css(
		{
			'transition-duration':'0s',
  			'transition-delay':'0s',
		});
		$("#Pyrano").css(
		{
			'transition-duration':'0s',
  			'transition-delay':'0s',
		});


}

function changeGraphicsView()
{
	if (document.getElementById("theinput").selectedIndex==0){ 
		viewFlag = 1;
	}
	else if (document.getElementById("theinput").selectedIndex==1){ 
		viewFlag = 2;
	}
	
	document.getElementById("headLineView").innerHTML=document.getElementById("theinput").value;
	if(viewFlag!=1){
	
	document.getElementById("videoLivePos").style.visibility="visible";
	ChangeVideoFN(viewFlag);
	document.getElementById("imageDiv").style.visibility="hidden";
	document.getElementById("imageDiv").style.width="0px";
	document.getElementById("imageDiv").style.height="0px";
    }
	else{
		document.getElementById("videoLivePos").style.visibility="hidden";
	    document.getElementById("imageDiv").style.visibility="visible";
	    document.getElementById("imageDiv").style.width="273px";
		if(imageFlag==false){
		  document.getElementById("imageDiv").style.height="200px";
		}
		else{
		  document.getElementById("imageDiv").style.height="390px";
		}
	  changeImageSize();
	}
}

function changeImageSize(){
     document.getElementById("imageDiv").style.width="273px";
     if(imageFlag==false){
		   $(document.getElementById("imageDiv")).animate({ height: "200px",width:"273px" },5 )
					  $(document.getElementById("imageDiv")).css({'background-size':"273px 200px"});
		}
		else{
		  $(document.getElementById("imageDiv")).animate({ height: "390px",width:"553px" },5 );
					  $(document.getElementById("imageDiv")).css({'background-size':"553px 390px"});
		}
}

function ChangeVideoFN(n){
	var videoID=document.getElementById("videoLivePos");
	videoID.style.visibility="visible";
	var randomNUM=Math.random();
	if(n==2){
	//videoID.src="http://124.124.59.242:8085/cae/exp1-cam0001.ogg?id="+randomNUM;
	videoID.src="http://amrita.vlab.co.in/RT/MEC/147/8054/trackercam.ogg?id="+randomNUM;
	}
	
	videoID.autoplay=1;
}

//flotChartClickable("#winContentLine",false);	
//flotChartClickable("#winContentBar",false);	


$.fn.tileArrange=function(maxim){
	var clickedTile = $(maxim).parent().parent().parent();
    $(".tile").parent().prepend(clickedTile);
	if ($(".tile:eq(1)").is('.wideTile')) 
	{
		$(".tile:eq(0)").after($(".tile:eq(2)"));
    }
}

function maximFN(titleID,containerID,thisVal){
		
	$(".winClose").tileArrange(thisVal);
	var id=document.getElementById(containerID);
	var guicontID;
	var guititlID
	
	clearTimeout(timer_id);
	for(var i=0;i<GUI_containerArray.length;i++){
	
		if($(id).height()<300){
			
			   if((String(GUI_containerArray[i])==containerID)){
				  
					if(String(GUI_containerArray[i])==String(GUI_containerArray[1])){
						
						 $(document.getElementById("BgDiv")).animate({ height: "100%",width:"100%" },5 );
						//loadBarChart();
						 //$(document.getElementById("imageDiv")).animate({ height:" 289px",width:"243px", marginLeft:"157px",paddingBottom: "301px", },5 );
						 loadBarChart();
						 $("#base").css({
							 'width':"266px",
							 'height':"339px",
						 });
						 $("#pyhelio").css({
							 'width':"269px",
							 'height':"339px",
						 });
						 
						  $("#Pyrano").css({
							 'left':"111px",
							 'top':"97px",
						 });
						 document.getElementById("Base").src=simPath+"images/base_zoom.png";
						  document.getElementById("Pyheliometer").src=simPath+"images/pyheliozoom.png";
						 // $('#Pyheliometer').attr('src','simPath+"images/pyheliozoom.png"');
						     top: 
   
					     $("#Pyheliometer").css({
							'top':' -204px',
    						'left':'270px'
						 });
						 $("#Base").css({
							'top':' -202px',
    						'left':'378px'
						 });
						
					    
					}
					else{
						
						  videoplay();
	                 
					}
				  $(document.getElementById(containerID)).animate({ height: "390px" }, 400 );
				  $( document.getElementById(titleID)).animate({width: '556px' }, { duration: 400,
					complete: function() {	
					
					loadBarChart();
						if(this.id==GUI_titleArray[0]){ loadLineChartStrain();loadBarChart();
									if(startFlag==true){
									startloading() ;
									}
								}
								else if(GUI_titleArray[1])
								{    //console.log("amma");
									 $("#modelImg2").css({
										'height':"100%",
										'margin-left':"13%"
									 });
									 
									
								}
								else if(GUI_titleArray[2])
								{   
									loadBarChart();  
									}
								else if(this.id==GUI_titleArray[2]){ 
								
								//loadBarChart();
								if(startFlag==true){
								startloading() ;
								
						  } }
					   }});
                                       
                                       
                                       if(viewFlag==1){
					  $(document.getElementById("imageDiv")).animate({ height: "390px",width:"553px" },5 );
					  $(document.getElementById("imageDiv")).css({'background-size':"553px 390px"});
					  imageFlag=true;
					}
					else{
					  if(viewFlag==1){
					     $(document.getElementById("imageDiv")).animate({ height: "200px",width:"273px" },5 )
					  } 
					}
			}
		  else{
				if(i>0){
					 if(i%2==0){
					  guicontID= document.getElementById(GUI_containerArray[i]);
					 // guicontID.innerHTML="";
					  
					  }
				}
				else{
					document.getElementById(GUI_containerArray[0]).innerHTML="";
				  }
				
				 $(document.getElementById("windRoseBgDiv")).animate({ width: "100%",height:"100%" }, 400 );
				
				 $(document.getElementById(GUI_containerArray[i])).animate({ height: "0px" } );
				 $(document.getElementById(GUI_titleArray[i])).animate({width: '273px' } );
			}
	 }
	 else{
             
             if(viewFlag==1){
					 $(document.getElementById("imageDiv")).animate({ height: "200px",width:"273px" },5 )
					  $(document.getElementById("imageDiv")).css({'background-size':"273px 200px"});
					}
					imageFlag=false;
		 rotimg();
	 guititlID= document.getElementById(GUI_titleArray[i]);
	 
			 guititlID.style.width="273px";
			 videoplay();
	         $(document.getElementById(GUI_containerArray[i])).animate({ height: '200px' });
			
					  $("#base").css({
							 'width':"132px",
							 'height':"198px",
							 
						 });
						 $("#pyhelio").css({
							 'transition-duration':"0s",
  							 'transition-delay':"0s",
							 'width':"132px",
							 'height':"198px",
							 
							 
							 
						 });
							
							 $("#Pyrano").css({
							 'transition-duration':'0s',
  							 'transition-delay':'0s',
							 'left':"49px",
							 'top':"1px",
							 
							 
						 });
						 document.getElementById("Base").src=simPath+"images/Base.png";
						  document.getElementById("Pyheliometer").src=simPath+"images/Pyhelio.png";
						 // $('#Pyheliometer').attr('src','simPath+"images/pyheliozoom.png"');
						     top: 
   
					     $("#Pyheliometer").css({
							'top':' -122px',
    						'left':'101px',
							'transition-duration':'0s',
  							'transition-delay':'0s',
						 });
						 $("#Base").css({
							'top':' -124px',
    						'left':'181px'
						 });
								 
								
			   if(i==0){
				  
				 $( document.getElementById(GUI_titleArray[i])).animate({width: '273px' }, { duration: 400,
					 complete: function() {	loadLineChartStrain();loadBarChart();
			
				   if(startFlag==true){startloading();	}
						
						} 
					  });
			   }
		     else{
			         $( document.getElementById(GUI_titleArray[i])).animate({width: '273px' }, { duration: 2   });
					
		    }
       }
   }
}
function videoplay(){
	
	var videoID= document.getElementById("videoLivePos");
		 if (videoID.paused){
		videoID.play();
		 }
}
function timeconversion(t){
	var offset=5.5;
	t =(parseInt(t)*1000)+(3600000*offset)
	return t;
}


function  loadLineChartStrain() 
{
	var timeConvrt;
	var k1=[];
	var k2=[];
	var k3=[];
	var k4=[];
	var k5=[];
	var k6=[];
	//drawWinContentGraph();	
	//console.log("timestampArray",timestampArray);
	if($("#winContentLine").height()>10){
	for (var i = 0; i < timestampArray.length; i += 1){
		timeConvrt=timeconversion(timestampArray[i])
		k1.push([timeConvrt,GHIArray[i]]);
		k2.push([timeConvrt,DHIArray[i]]);
	}
	//if(calebFlag==true){
	 $.plot($("#winContentLine"),
   [ {data: k1 ,label:" GHI",color: '#d9537c'},{ data: k2 ,label:" DHI",color: '#f89904'}], {
	   
	   series: {
		   lines: { show: true },
		   points: { show: true } 
	   },
	   grid: { hoverable: true, clickable: true ,borderWidth:0.4},
	   yaxis: { tickDecimals:0},
	   legend: { position: 'nw',show:true},
	xaxis: { mode:"time", timeformat: "%h:%M:%S"}
	 });
	 flotChartRollover("#winContentLine",false);
	 
	//}
	}
	
}

function loadBarChart() {
	var timeConvrt;
	var k3=[];
	
		
	if($("#winContentBar").height()>10){
	for (var i = 0; i < timestampArray.length; i += 1){
		timeConvrt=timeconversion(timestampArray[i])
		k3.push([timeConvrt,DNIArray[i]]);
	}
	//if(calebFlag==true){
	 $.plot($("#winContentBar"),
   [ { data: k3 ,label:" DNI",color: '#564fed'}], {
	   series: {
		   lines: { show: true },
		   points: { show: true } 
	   },
	   grid: { hoverable: true, clickable: true ,borderWidth:0.4},
	   yaxis: { tickDecimals:0},
	   legend: { position: 'nw',show:true},
	  xaxis: { mode:"time", timeformat: "%h:%M:%S"}
	 });
	 flotChartRollover("#winContentBar",false);
	 
	//}
	}
 }
function flotChartRollover(Chart_name,val){
	 var previousPoint = null;
    $(Chart_name).bind("plothover", function (event, pos, item) {
            if (item) {
				 
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;
                  //  console.log("TIMESTAMP",timestampConversion(item.datapoint[0].toFixed(2)));
                    $("#tooltip").remove();
                    if(val==true){
                    var x = timestampConversion(item.datapoint[0].toFixed(2)),y = item.datapoint[1].toFixed(2);
					}
					else{
				    var x = timestampConversion(item.datapoint[0].toFixed(2)), y = item.datapoint[1].toFixed(2);
					}
                    showTooltip(item.pageX, item.pageY,  x + ", " + y);
                }
            }
            else {
                $("#tooltip").remove();
                previousPoint = null;            
            }
    });
}
function timestampConversion(item)
{
	    var formattedTime;
		var  milliseconds = parseInt(item);
		var seconds = milliseconds / 1000;
		var minutes = seconds / 60;
		seconds %= 60;
		var  hours = minutes / 60;
		minutes %= 60;
		var days = hours / 24;
		hours %= 24;
		formattedTime = Math.floor(hours) + ':' + Math.floor(minutes) + ':' + Math.floor(seconds);
		//console.log("formattedTime",formattedTime);
		return formattedTime; 
}
  
function showTooltip(x, y, contents)
{
        $('<div id="tooltip">' + contents + '</div>').css( {
            position: 'absolute', display: 'none',
            top: y - 10, left: x + 5,
            border: '1px solid #CC0', padding: '2px','background-color': '#FFC', opacity: 1
        }).appendTo("body").fadeIn(200);
		
}
function startloading(){
	clearTimeout(timer_id);
	timer_id=setTimeout(loadXMLDoc, 1000);	
}

//export FN...
function exportFn()
{
	exportfileName="Solar_Tracker";
	var filename=exportfileName+".csv"
	var timeConvrt;
	var csvData = "";
	csvData="Time "+" , "+"Date"+","+"Solar Elevation"+","+"Solar Azimuth "+","+"Latitude"+","+"LongitudeArray"+","+"GHI"+","+"DHI"+","+"DNI"+" [n] ";
	for (var i = 0; i < timestampArray.length; i++) {
		timeConvrt=timestampConversion(timeconversion(parseInt(timestampArray[i])));
		csvData += timeConvrt+","+sysDate+ " , "+ElevationArray[i]+","+AzimuthArray[i] +","+LatitudeArray[i] +","+LongitudeArray[i] +","+GHIArray[i] +","+DHIArray[i] +","+DNIArray[i] +" [n] ";
	}
	//window.location=simPath+"download.php?data="+csvData+"&filename="+filename;
	var filename="Solar_Tracker.csv"
	var timeConvrt;
	var csvData = "";
	csvData="Time%2CDate%2CSolar%20Elevation%2CSolar%20Azimuth%2CLatitude%2CLongitudeArray%2CGHI%2CDHI%2CDNI%0A";
	for (var i = 0; i < timestampArray.length; i++)
	{
		timeConvrt=timestampConversion(timeconversion(parseInt(timestampArray[i])));
		csvData += timeConvrt+"%2C"+sysDate+"%2C"+ElevationArray[i] + "%2C"+  AzimuthArray  [i]+ "%2C"+  LatitudeArray  [i]+ "%2C"+  LongitudeArray  [i]+ "%2C"+  GHIArray  [i]+ "%2C"+  DHIArray  [i]+ "%2C"+  DNIArray  [i]+"%0A";
	} 
	var uri =  CsvContent+csvData;
	var downloadLink = document.createElement("a");
	downloadLink.href = uri;
	downloadLink.download = filename;
	document.body.appendChild(downloadLink);
	downloadLink.click();
	document.body.removeChild(downloadLink);

}

function clearArrayVal(){
	 EfficiencyArray=[];
	 IntensityArray=[];
	 PowerArray=[];
	 CurrentArray=[];
	 VoltageArray=[];
	 AzimuthArray=[];
	 ElavationArray=[];
	 AngleArray=[];
	 PanelArray=[];
	 timestampArray=[];
	 actloadArr=0;
	 strayloadArr=[];
	 currentArray=[];
	 loadBarChart();
	 loadLineChartStrain();
	 ClearStatus();
	//Rotateimag1();
	//Rotateimag();
	
}


/////Status displayy
function displayValues(){
		 document.getElementById("date").innerHTML = "Date :  "+sysDate;
		 document.getElementById("time").innerHTML = "Local Time(hh:mm:ss):  "+timestampConversion(timeconversion(parseInt(timestampArray[timestampArray.length-1])));
		 document.getElementById("elevation").innerHTML = "Solar Elevation(&deg;):"+ElevationArray [ElevationArray.length-1];
		 document.getElementById("azimuth").innerHTML = "Solar Azimuth(&deg;):  "+AzimuthArray[AzimuthArray.length-1];
		 document.getElementById("latitude").innerHTML = "Latitude(&deg;): "+LatitudeArray[LatitudeArray.length-1];
	     document.getElementById("longitude").innerHTML = "Longitude(&deg;):  "+LongitudeArray[LongitudeArray.length-1];
	     document.getElementById("ghi").innerHTML = "GHI(W/m²): "+GHIArray[GHIArray.length-1];
	     document.getElementById("dhi").innerHTML = "DHI(W/m²):  "+DHIArray[DHIArray.length-1];
	     document.getElementById("dni").innerHTML = "DNI(W/m²): "+DNIArray[DNIArray.length-1];
		setTimeout(rotateSet, 3000);
	  
}
function rotateSet()
{
		     if(Rotflag==true)
	     {
	       Rotateimag1();
	       Rotateimag2();
		   Rotflag=false;
	     }
}

function ClearStatus()
{
		document.getElementById("date").innerHTML = "Date :  ";
		document.getElementById("time").innerHTML = "Local Time(hh:mm:ss):  ";
		//document.getElementById("declination").innerHTML = "Declination of the Earth:  :  ";
		document.getElementById("elevation").innerHTML = "Solar Elevation(&deg;):  ";
		document.getElementById("azimuth").innerHTML = "Solar Azimuth(&deg;):  ";
		document.getElementById("latitude").innerHTML = "Latitude(&deg;):  ";
	  	document.getElementById("longitude").innerHTML = "Longitude(&deg;):  ";
	   	document.getElementById("ghi").innerHTML = "GHI(W/m²):  ";
	   	document.getElementById("dhi").innerHTML = "DHI(W/m²):  ";
	   	document.getElementById("dni").innerHTML = "DNI(W/m²):  ";
}
function traceangle()
{
if(Angle>35)
	{
		Angle=35;
		return Angle;
	}
	else if(Angle<-45)
	{
		Angle=-45;
		return Angle;	
	}
	else
	{
	}
}
function AlertImage()
{
	document.getElementById("AlertImage").style.visibility="hidden";
	document.getElementById("AlertImage").style.height="0px";
	document.getElementById("AlertImage").style.width="0px";
	document.getElementById("AlertImage").style.marginLeft="0px";
	document.getElementById("AlertImage").style.marginTop="0px";4
}