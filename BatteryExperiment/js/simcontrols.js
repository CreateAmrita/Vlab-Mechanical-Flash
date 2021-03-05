$(document).ready(function(){
	    //console.log("amma"); 
	 $( ".DischargeSlider" ).live( "slidestop", function(event, ui) {
 			DischargeChange();
		});
		$( ".TemperatureSlider" ).live( "slidestop", function(event, ui) {
 			TemperatureChange();
		});
});

var flagA=0;
var viewFlag=1;
var startFlag=false;
var rotateFlag;
var Capacity=0;
var c=false;
var stopflag=false;
var startbtn = 0;
var timer_id;
var imageFlag=false;
var calebFlag=false;
var xmlloadCount=1;
var numPonits;
var GUI_containerArray=["winContentSimulator","winContentBar"];
var GUI_titleArray=["tileWindowlengthy","tileWindowlengthy1"];
knobFlag=0;
var timestampArray=new Array();
var actloadArr;
var strayloadArr=new Array();
var exportData=1;
var unloadVal=0;
var sysDate;
var actloadVar;
var currntVar;
var sysDate;
var dischargerateArray= [];
var capacityArray=[];
var TemperatureArray=[];
var disflag=false;
var prev_val=0;
var PrevTemp=0;

function startstreaming(){
		if (startFlag==false)
		{
		
			startFlag = true;						
		  // c= true;
			document.getElementById("DischargeSlider").disabled=false;
			document.getElementById("TemperatureSlider").disabled=false;
			clearArrayVal();
			document.getElementById("start").value="Stop";
			var dis=document.getElementById('discharge').value;
			//console.log("start");
			rotateFlag=true;
			document.getElementById("discharge").disabled=true;
			document.getElementById("temperature").disabled=true;
			if(document.getElementById("discharge").checked==true)
			{
				RotateFan();
			}
			else if(document.getElementById("discharge").checked==true)
			{
				RotateFan();
			}
			else
			{
				clearInterval(refreshId);
			}
			plot();
			check();
			
			
			
		}
		else
		{
			StopFan();
			rotateFlag=false;
			clearArrayVal();	
			document.getElementById("start").value="Start Experiment";	
			calebcount=2;	
 			loadXMLDoc();
			clearTimeout(timer_id);
			startFlag = false;
			document.getElementById("DischargeSlider").value=9;
			document.getElementById("midval1").innerHTML=9;
			document.getElementById("TemperatureSlider").value=-18;
			document.getElementById("midval2").innerHTML=-18;
			document.getElementById("discharge").checked=false;
			document.getElementById("temperature").checked=false;
			document.getElementById("discharge").disabled=false;
			document.getElementById("temperature").disabled=false;
			document.getElementById("DischargeSlider").value=9;
			document.getElementById("midval1").innerHTML=9;
			document.getElementById("TemperatureSlider").value=-18;
			document.getElementById("DischargeSlider").disabled=false;
			document.getElementById("TemperatureSlider").disabled=false;
			RheoMove(9); 
			
		}	
}

function check()
{
	if((document.getElementById("discharge").checked==true)&&(startFlag==true))
	{
		document.getElementById("TemperatureSlider").disabled=true;
		//clearInterval(refreshId);
		//RotateFan();
	}
	else
	{
		document.getElementById("DischargeSlider").disabled=true;
		//clearInterval(refreshId);
		//RotateFan();
	}
	//document.getElementById("discharge").checked=false;
	//document.getElementById("discharge").checked=false;,
}

function DischargeChange()
{
	var val=document.getElementById("DischargeSlider").value;
	clearTimeout(timer_id);
	document.getElementById("midval1").innerHTML="  "+val;
	//knobFlag=1;
	RheoMove(val); 
	
	//startloading();
}
function TemperatureChange()
{
	//console.log("temparature slider");
	var val=document.getElementById("TemperatureSlider").value;
	clearTimeout(timer_id);
	document.getElementById("midval2").innerHTML="  "+val;
	//linkcount=7;
}
prev_val=9;
PrevTemp=1;
function SliderMoveDischargeCheck()
{
	var current_val;
	if((document.getElementById("discharge").checked==true)&&(startFlag==true))
	{
		//prev_val=9;
		//document.getElementById("TemperatureSlider").disabled=true;
		current_val=document.getElementById("DischargeSlider").value;
		//console.log("Previous1=",prev_val,"Current1=",current_val);
		if((prev_val==current_val)||(prev_val<current_val)&&(current_val!=9))
		{
			prev_val=current_val;
			CalcCapacityDis();
	    }
		else //if(current_val<prev_val)
		{
			//console.log("prev value changing option");
			current_val=prev_val;
			clearInterval(refreshId);
			RotateFan();
		}
		
	}
	else{}
}

function SliderMoveTemperatureCheck()
{
	 var CurrentTemp;
	 if((document.getElementById("temperature").checked==true)&&(startFlag==true))
	 {
		//console.log("here in capacity vs temperature slider");
		CurrentTemp=document.getElementById("TemperatureSlider").value;
		//console.log("Previous2=",PrevTemp,"Current2",CurrentTemp);
		if(PrevTemp==CurrentTemp||(PrevTemp<=CurrentTemp))
		{
			//console.log("true condition");
			PrevTemp=CurrentTemp;
			CalcCapacityTemp();
		}
		else if(CurrentTemp<PrevTemp)
		{
			CurrentTemp=PrevTemp;
			clearInterval(refreshId);
			RotateFan();
		}
		else
		{
			PrevTemp=CurrentTemp;
		}
	}
	else{}
}

var temp=-18;
function CapacityDischargeRate()
{
	document.getElementById("graphplot").innerHTML="Capacity vs. Discharge rate";
}
function CalcCapacityDis()
{
	clearInterval(refreshId);
	//console.log("calc ca vs dis");
	var dr=document.getElementById("DischargeSlider").value;
	dischargerateArray.push(dr);
	//console.log("DR in calc function is", dr);
	var tempr=document.getElementById("TemperatureSlider").value;
	TemperatureArray.push(tempr);
	//console.log("temp in calc function is", tempr);
	//console.log("temparature=",tempr);
	if((dr>=9&&dr<=27)&&(tempr>=-18&&tempr<=25))
	{
		//console.log("executing first eqn");
		 Capacity=((-0.0212)* Math.pow(tempr,2)+(0.708*tempr)+32.568)* Math.pow(dr,(1-((-0.0001)*Math.pow(tempr,2)+0.0015*tempr+1.1327)));
		//RotateFan();
	}
	else if((dr>27&&dr<=54)&&(tempr>=-12&&tempr<=25))
	{
		//console.log("executing secnd eqn");
		Capacity=((-0.0282)*Math.pow(tempr,2)+(0.8446*tempr)+33.445)*Math.pow(dr,(1-((-0.00006)*Math.pow(tempr,2)+0.0008*tempr+1.128)));
		//RotateFan();
			
	}
	else
	{
		//console.log("executing third eqn");
		 Capacity=((0.1394)*tempr+33.445)*Math.pow(dr,(1-((-0.0008)*tempr+1.128)));
		//RotateFan();
	}
	document.getElementById("Disval").innerHTML=dr;
	document.getElementById("Tempval").innerHTML=tempr;
	document.getElementById("Capacityval").innerHTML=Capacity.toFixed(5);
	RotateFan();
	//var C=C.toFixed(5);
	capacityArray.push(Capacity);
	//console.log("discharge=",dr,"capacity=",C,"temperature:",tempr);
	//console.log("capacity=",capacityArray);
	var disflag;
	disflag=true;
	loadLineChartDischarge();
	/*if(rotateFlag==true)
	{
		
	}
	*/
	
}
function CapacityTemperature()
{
		document.getElementById("graphplot").innerHTML="Capacity vs. Temperature";
}
function CalcCapacityTemp()
{
	clearInterval(refreshId);
	//console.log("calc ca vs temp");          
	var tempr=document.getElementById("TemperatureSlider").value;
	TemperatureArray.push(tempr);
	var DisRate=document.getElementById("DischargeSlider").value;
	dischargerateArray.push(DisRate)
	if((DisRate>=9&&DisRate<=27)&&(tempr>=-18&&tempr<=25))
	{
		//console.log("executing first eqn");
		Capacity=((-0.0212)* Math.pow(tempr,2)+(0.708*tempr)+32.568)* Math.pow(DisRate,(1-((-0.0001)*Math.pow(tempr,2)+0.0015*tempr+1.1327)));
		//RotateFan();
	}
	else if((DisRate>27&&DisRate<=54)&&(tempr>=-12&&tempr<=25))
	{
		//console.log("executing secnd eqn");
		Capacity=((-0.0282)*Math.pow(tempr,2)+(0.8446*tempr)+33.445)*Math.pow(DisRate,(1-((-0.00006)*Math.pow(tempr,2)+0.0008*tempr+1.128)));
		//RotateFan();
	}
	else
	{
		//console.log("executing third eqn");
		Capacity=((0.1394)*tempr+33.445)*Math.pow(DisRate,(1-((-0.0008)*tempr+1.128)));
		//RotateFan();
	}
	RotateFan();
	//var C=C.toFixed(5);
	//console.log("discharge=",DisRate,"capacity=",Capacity,"temperature:",tempr);
	capacityArray.push(Capacity);
	//console.log("capacity=",capacityArray);
	//capacityArray.push(Capacity);
	loadLineChartTemperature();
	document.getElementById("Disval").innerHTML=DisRate;
	document.getElementById("Tempval").innerHTML=tempr;
	document.getElementById("Capacityval").innerHTML=Capacity.toFixed(5);
	console.log("capacity=",capacityArray);
	//if(rotateFlag==true)
	//{
	//	RotateFan(5);
	//}
}

function plot()
{
		
	if(document.getElementById("discharge").checked==true)
	{	
		CalcCapacityDis();
		loadLineChartDischarge();
		
	}
	else if(document.getElementById("temperature").checked==true)
	{
		CalcCapacityTemp();
		loadLineChartTemperature();
		
	}
	else{}
}
var refreshId;
function RotateFan()
{
	//var refreshId;
	if(rotateFlag==true)
	{
		//console.log("inside RotateFan");
		//var i=r;
		var d=Capacity/10;
		//console.log(d);
		//console.log("i.........................",i);
	
		function test() {
		//console.log("rotate");
			d=d+Capacity/2;
			$("#Imgfanleaf").css({
			  '-moz-transform':'rotate('+d+'deg)',
			  '-webkit-transform':'rotate('+d+'deg)',
			  '-o-transform':'rotate('+d+'deg)',
			  '-ms-transform':'rotate('+d+'deg)',
			  'transform': 'rotate('+d+'deg)'
			});  
		}
      	refreshId = setInterval(test,10);
	}
	
}
function StopFan()
{
		clearInterval(refreshId);
		//console.log("stopfan");
}

function RheoMove(d)
{
	//console.log("rheostat move");
	//console.log(d);
	$("#Imgrheomove").animate({left:''+d+'px'}, 5);
	
}
// Tile re-arrange on maximize
$.fn.tileArrange=function(maxim){
	var clickedTile = $(maxim).parent().parent().parent();
    $(".tile").parent().prepend(clickedTile);
	if ($(".tile:eq(1)").is('.wideTile')) {
		$(".tile:eq(0)").after($(".tile:eq(2)"));
     }
}
//---------------------------//

function maximFN(titleID,containerID,thisVal){
		
	$(".winClose").tileArrange(thisVal);
	var id=document.getElementById(containerID);
	var guicontID;
    var guititlID;
	clearTimeout(timer_id);
	for(var i=0;i<GUI_containerArray.length;i++){
	  
		if($(id).height()<300){
			
			if((String(GUI_containerArray[i])==containerID)){
				//$(document.getElementById(Imgrheoandstand)).css(height:"390px");
				console.log("hello");
				//$(document.getElementById(spansim)).animate({ height: "390px" },5 )
							   
				$(document.getElementById(containerID)).animate({ height: "390px" },5 )
				$( document.getElementById(titleID)).animate({width: '554px' }, { duration: 5,
				complete: function() {	
				
				//$("#Imgrheoandstand").css({'height':"390px"})
				//$("#Imgfantop").css({'width': "145px"}, {'height': "145px"}, {'margin': "-345px -13px 231px -134px"} )
				//$("#Imgrheomove").css({'width':" 27px"},{'height':" 29px"},{'margin':" -163px 0px 166px -276px"})
				//$("#Imgfanleaf").css({'width':" 121px"},{'margin': "-328px 0px 217px 402px"})
 				
 
				
				 if(this.id==GUI_titleArray[1]){ loadLineChartDischarge();loadLineChartTemperature();
				
				//console.log("hello");
					// if(startFlag==true)
					// {
					//	startloading();
					// }
				 }
				/*else if(this.id==GUI_titleArray[1]){ //loadBarChart() ; 
					 //if(startFlag==true)
					// {
					//	startloading(); 
					// }
					$(document.getElementById(spansim)).animate({ height: "390px" },5 )
					console.log("hi");
				 }*/
				  }  });
			}
			/*else{
			 if(i!=2){
				 guicontID= document.getElementById(GUI_containerArray[i]);
				 guicontID.innerHTML="";
			 }
				 
				$(document.getElementById(GUI_containerArray[i])).animate({ height: "0px" } )
				
				if(i>0){
					if(titleID!=String(GUI_titleArray[0])){
					  $(document.getElementById(GUI_titleArray[i])).animate({width: '273px' },5 );
		           	}
				}
				else{
					$(document.getElementById(GUI_titleArray[0])).animate({width: '555px' },5 );
				}
			}*/
		}
		else{
			guititlID= document.getElementById(GUI_titleArray[i]);
			guititlID.style.width="555px";
			 
			$(document.getElementById(GUI_containerArray[i])).animate({ height: '200px' });
			$(document.getElementById(GUI_containerArray[i])).animate({ width: '553px' });
			
				if(i==0){
						if(titleID!=String(GUI_titleArray[0])){
							
						  $(document.getElementById(GUI_titleArray[i])).animate({width: '273px' },{ duration: 5,
						  complete: function() {	loadLineChartDischarge();loadLineChartTemperature(); 
				
							// if(startFlag==true){
							//	startloading() ;
							//	}
							}  });
						}
				}
				else{
					//$("#Imgrheoandstand").css({'height':"200px"})
					 $(document.getElementById(GUI_titleArray[0])).animate({width: '555px' } ,{ duration: 400,
					complete: function() {	loadLineChartDischarge();loadLineChartTemperature();
					
					//if(startFlag==true){
						//startloading() 
					//} 
					 } });
				}
			
		}
	}
}
function timeconversion(t){
	var offset=5.5;
	t =(parseInt(t)*1000)+(3600000*offset)
	return t;
}
function  loadLineChartDischarge() {
	var timeConvrt;
	var k1=[];
	var k2=[];
	var k3=[];
	var k4=[];
	var k5=[];
	var k6=[];
		
	if($("#winContentBar").height()>10){
		//changed
	for (var i = 0; i < capacityArray.length; i += 1){
		timeConvrt=timeconversion(timestampArray[i]);
		k1.push([dischargerateArray[i],capacityArray[i]]);
	}
	//if(calebFlag==true){
	 $.plot($("#winContentBar"),
   [ { data: k1 ,/*label:" Strain Vs time"*/color: '#A52A2A'}], {
	   series: {
		   lines: { show: true },
		   points: { show: true }
	   },
	   grid: { hoverable: true, clickable: true ,borderWidth:0.4},
	   yaxis: { tickDecimals:0},
	   legend: {show:true, position: 'nw' },
	  // xaxis: { mode:"time", timeformat: "%h:%M:%S"}
	 });
	 flotChartRollover("#winContentBar",false);
	//flotChartClickable("#winContentBar",false);
	//}
	}
	 
}
/*function flotChartClickable(Chart_name,val){
	 var previousPoint = null;
    $(Chart_name).bind("plotclick", function (event, pos, item) {
		
            if (item)//&&(cf==false)) 
			{
              		//
					//var c=true;
					if(c==true)
					{//c++;
						var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);
				   		console.log("x=",x);
					   	console.log("y=",y);
				   		//cf=true;
						c=false
					}
					else
					{
						var x1 = item.datapoint[0].toFixed(2), y1 = item.datapoint[1].toFixed(2);
				   		console.log("x1=",x1);
					   	console.log("y1=",y1);
					}
            }
            //else if(item)
			//{
				//	var x1 = item.datapoint[0].toFixed(2), y1 = item.datapoint[1].toFixed(2);
				
				//	console.log("x1=",x1);
				//	console.log("y1=",y1);
				
                       
          //  } 
		else{}
    });
}*/

function  loadLineChartTemperature() {
	var timeConvrt;
	var k1=[];
	var k2=[];
	var k3=[];
	var k4=[];
	var k5=[];
	var k6=[];
		
	if($("#winContentBar").height()>10){
		//changed
	for (var i = 0; i < capacityArray.length; i += 1){
		timeConvrt=timeconversion(timestampArray[i]);
		k1.push([TemperatureArray[i],capacityArray[i]]);
	}
	//if(calebFlag==true){
	 $.plot($("#winContentBar"),
   [ { data: k1 ,/*label:" Strain Vs time"*/color: '#A52A2A'}], {
	   series: {
		   lines: { show: true },
		   points: { show: true }
	   },
	   grid: { hoverable: true, clickable: true ,borderWidth:0.4},
	   yaxis: { tickDecimals:0},
	   legend: { position: 'nw' },
	  // xaxis: { mode:"time", timeformat: "%h:%M:%S"}
	 });
	 flotChartRollover("#winContentBar",false);
	 //flotChartClickable("#winContentBar",false);
	//}
	}
}
function flotChartRollover(Chart_name,val){
	 var previousPoint = null;
    $(Chart_name).bind("plothover", function (event, pos, item) {
            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;
                    
                    $("#tooltip").remove();
                    if(val==true){
                    var x = timestampConversion(item.datapoint[0].toFixed(2)), y = item.datapoint[1].toFixed(2);}
					else{
				    var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);
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
function timestampConversion(item){
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
		return formattedTime; 
 }
  
function showTooltip(x, y, contents) {
	//
        $('<div id="tooltip">' + contents + '</div>').css( {
            position: 'absolute', display: 'none',
            top: y - 10, left: x + 5,
            border: '1px solid #CC0', padding: '2px','background-color': '#FFC', opacity: 1
        }).appendTo("body").fadeIn(200);
		
}
/*function startloading(){
	clearTimeout(timer_id);
	timer_id=setTimeout(loadXMLDoc, 1000);	
	if(startFlag==true){
		//document.getElementById("loading").style.visibility="hidden";
		//document.getElementById("stoploading").style.visibility="visible";
	}*/
//}
//export FN...
function exportFn()
{
	exportfileName="Battery";
	var filename=exportfileName+".csv"
	var timeConvrt;
	var csvData = "";
	csvData="Temperature"+","+"Discharge rate"+","+"Capacity"+" [n] ";
	for (var i = 0; i < capacityArray.length; i++) {
		//timeConvrt=timestampConversion(timeconversion(parseInt(timestampArray[i])));
		csvData +=TemperatureArray[i]+ " , " +dischargerateArray[i]+","+capacityArray[i]+" [n] ";
	}
	linkcount=5;
	window.location=simPath+"download.php?data="+csvData+"&filename="+filename;
	xmlUrl=simPath+"xmlLoad.php?loadLink="+linkcount+"&filename="+filename;
}

function clearArrayVal()
{
	 yvalArray=[];
	 strArray1=[];
	 strArray2=[];
	 strArray3=[];
	 strArray4=[];
	 strArray5=[];
	 strArray6=[];
	 stressArray1=[];
	 stressArray2=[];
	 stressArray3=[];
	 stressArray4=[];
	 stressArray5=[];
	 stressArray6=[];
	 timestampArray=[];
	 actloadArr=0;
	 strayloadArr=[];
	 currentArray=[];
	 dischargerateArray=[];
	 TemperatureArray=[];
	 capacityArray=[];
	 loadLineChartDischarge();
	 loadLineChartTemperature();
	 StopFan();
	 prev_val=9;
	 PrevTemp=-18;
}

function loadComplete()
{
	//startFlag=false;
		document.getElementById("stoploading").style.visibility="visible";
		document.getElementById("loading").style.visibility="hidden";
		document.getElementById("loading").disabled=false;
		document.getElementById("stoploading").disabled=false;
}