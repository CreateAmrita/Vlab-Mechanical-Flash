<!--Your html code for controls here(Follow UL-LI format)-->

<body onbeforeunload="Unloadfn()" >
<ul>
		<li>
				<h1>Variables<span></span></h1>
				
				<div class="varBox"><br>                                		
						<div style="position:relative;">
                       
								
 <p class="varTitle" >Select view:<br />
								                        <select  style="width:160px; margin-left:3px;" class="dropBox" name="thelist3" id="theinput"  onChange="changeGraphicsView()">
								<option value="Image view">Image view</option>
								<option value="Webcam1">Webcam1</option>
                                
								
						</select>
                        </p><br/>
                        <p>
										 <input type="button"    class="SubButton" name="Start" value="Start streaming live data "  id="Start" onClick="StartStreaming();">
								</p>
								
						     	
                                
                                </br>
								<p>
										<button type="value" class="SubButton" name="export" disabled="true" id="export" onClick="exportFn()">Export</button>
								</p></br></br>
                                
						</div>
						
				</div>
		<li>
				<h1>Station status</h1>
		</li>
		<p class="varTitle" id="date" >Date:</p>
		<p class="varTitle" id="time" >Local Time(hh:mm:ss):</p>
		<!--<p class="varTitle" id="day">Day of Year :</p>-->
		<!--<p class="varTitle" id="declination" >Declination of the Earth :</p>-->
		<p class="varTitle" id="elevation" >Solar Elevation(&deg;):</p>
		<p class="varTitle" id="azimuth"> Solar Azimuth(&deg;):</p>
        <p class="varTitle" id="latitude">Latitude(&deg;):</p>
     	<p class="varTitle" id="longitude">Longitude(&deg;):</p>
     	<p class="varTitle" id="ghi">GHI(W/m²):</p>
     	<p class="varTitle" id="dhi">DHI(W/m²):</p>
		<p class="varTitle" id="dni">DNI(W/m²):</p>
    
			
</ul>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>
</body>
