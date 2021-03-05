<!--Your html code for controls here(Follow UL-LI format)-->

<body>
<ul>
		<li>
				<h1>Variables<span></span></h1>
				
				<div class="varBox">
                <p class="varTitle" ><br> <br><b>Select Plot:</b><br /></p>
                <br />
                <p class="varTitle" style="font-size:11px; margin-left:-9px;">
                
						<input type="radio"	name="capacity"	value="CapacityDischargeRate" id="discharge" onMouseUp="CapacityDischargeRate();">Capacity vs. Discharge rate</br><br>
						<input type="radio"	name="capacity"	value="CapacityTemaperature" id="temperature" onMouseUp="CapacityTemperature();">Capacity vs. Temperature<br>
        		</p>
                
                	     
						<div style="position:relative;">
							<br><br>	
                                <div>
								<p  id="labelid" class="varTitle">Discharge rate:<span id="midval1">9</span>
						  		<input type="range" class="rangeSlider knobslider" min="9" max="81" id="DischargeSlider" step="1" name="knobslider" value="1"  onmouseup="DischargeChange();SliderMoveDischargeCheck();"/>
                                </p><br />
                                <p  id="labelid" class="varTitle">Temperature:<span id="midval2">1</span>
                                <input type="range" class="rangeSlider knobslider" min="-18" max="25" id="TemperatureSlider" step="1" name="knobslider1" value="1"  onmouseup="TemperatureChange();SliderMoveTemperatureCheck();"/>
								</p>
                                </br></br>
                                
                                <input type="button"  style="width:140px; height:27px; font-weight:bold; border-radius:6px; margin-left: 23px"class="subButton" name="start" value="Start Experiment"  id="start" onClick="startstreaming();"/>
                				<br><br>
                                <p  id="Disid" class="varTitle">Discharge rate &nbsp;:<label id="Disval"></label>
                                </p>
                                 <p  id="Tempid" class="varTitle">Temperature &nbsp; &nbsp;:<label id="Tempval"></label>
                                </p>
                                 <p  id="Capacity" class="varTitle">Capacity &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :<label id="Capacityval"></label>
                                </p><br><br>
                                <input type="button"  style="width:140px; height:27px; font-weight:bold; border-radius:6px; margin-left: 23px"class="subButton" name="start" value="Export"  id="start" onClick="exportFn();"/>
                <br></br>
<!--                 <input type="button"  style="width:140px; height:27px; font-weight:bold; border-radius:6px; margin-left: 23px"class="subButton" name="plot" value="Plot Graph "  id="plot" onClick="plot();"/>   
-->								</div >
						</div>
						<br>
				</div>      
</ul>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>
</body>