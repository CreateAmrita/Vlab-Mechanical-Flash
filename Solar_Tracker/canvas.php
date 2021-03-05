<!--Do not edit section-->
<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
	<?php
	
$VideoElement = "http://amrita.vlab.co.in/RT/MEC/147/8054/trackercam.ogg?id=".rand(10,1000)*0.002101;
?>

</script>
<!--[if lt IE 9]><script language="javascript" type="text/javascript" src="<?php getSimPath(); ?>js/excanvas.js"></script><![endif]-->

<!--<script language="javascript" type="text/javascript" src="<?php getSimPath(); ?>js/jQueryRotate.js"></script>-->
<script language="javascript" type="text/javascript" src="<?php getSimPath(); ?>js/jquery.flot.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/ajax.js"></script>
<!--//Do not edit section ends here-->
<!--//Note: Use <?php //getSimPath(); ?> as the parent directory to access directories in simulator root path-->
<!--Your html code for canvas here-->

<div class="contatinerclass" >
		
        
   <div class="contatinerclass4 tile" id="contatinerclass4" >
    <div class="tileWindow" id="tileWindow1">
      <div class="winTitleBar">
        <p>DHI(W/m²),GHI(W/m²)vs.Time(hh:mm:ss)</p>
        <div class="winClose" id="closeWindow1" onclick="maximFN('tileWindow1','winContentLine',this);"></div>
      	</div>
     	 <div class="winContent" id="winContentLine"></div>
      
    	</div>
  </div>
  
 
  <div class="contatinerclass5 tile" id="contatinerclass5" >
    <div class="tileWindow" id="tileWindow2">
      <div class="winTitleBar">
        <p>Graphic view</p>
        <div class="winClose" id="closeWindow2" onclick="maximFN('tileWindow2','winContentRose',this);"></div>
      	</div>
      <div class="winContent" id="winContentRose">
      <div id="BgDiv">
      <div id="base" style=" width:132px; height:198px;float:left; overflow:hidden;">
      
        <img id="Pyrano" src="<?php getSimPath(); ?>images/Pyrano.png" style="position:relative;left:49px;top:1px;width:33px;" />
        <!--	<img id="basebox" src="<?php getSimPath(); ?>images/Basebox.png" style="position:relative;top:12px;" />
        <br /> <br /> <br /> <br /> <br /><p>Rotation of the base of the equipment(Top View)</p>-->
      </div>
      <div id="pyhelio" style=" height:198px;overflow:hidden; "></div>
     <!-- <div style="position:relative; width:50px;height:50px; border:solid 1px black;">hi</div>-->
        	
        	<img id="Base" src="<?php getSimPath(); ?>images/Base.png" style="position:relative;top: -124px;left: 181px; "/>
            <img id="Pyheliometer" src="<?php getSimPath(); ?>images/Pyhelio.png" style="position:relative;top: -122px;left: 101px;" />
                 <!-- <p>Rotation of Pyheliometer(Front View)</p>-->

      </div>
      <!--<div id="imageholder" style="float:left;width:100%; height:100%; overflow:hidden;">
     	<img id="modelImg2" style="float:left;height:100%;margin-left: 9%; "src="<?php getSimPath(); ?>images/machinefull.png" />
                        
                        
                          <span style="float:left;border:1px solid;height:50%;width:40%;margin-top:2%;margin-left:5%;overflow:hidden;">
                           <img id="underzoom" style="float:left;height: 50%;width: 50%;position: relative;margin-top:-10%;margin-left:25%"src="<?php getSimPath(); ?>images/objectunderzoom.png" />
                      
                           <img id="modelImg4" style="float:left;height: 67%;width: 67%;position: relative;margin-top:30%;margin-left:25%"src="<?php getSimPath(); ?>images/objectbottomzoom.png" />
                           <img id="strainguage" style="float:left;width: 6%;height: 90%;position: relative;margin-left:-46%;margin-top:-30%"src="<?php getSimPath(); ?>images/strainguage.png" />
                         <img id="overzoom" style="float:left;height: 58%;width: 58%;position: relative;margin-top:-137%;margin-left:25%" src="<?php getSimPath(); ?>images/objecttopzoom.png" />
                        </span>
                        <p class="varTitle1" style="margin-top:45%;">Elongation:<label id="elongationid"></label><label>Mm</label></p>
						<p class="varTitle1" style="text-align:center;">1 Mm = 0.1 Cm</p>
        </div>-->
      </div>  
  </div>
  </div>
  
  
	<div class="contatinerclass2 tile" id="contatinerclass2">
    <div class="tileWindow" id="tileWindow3">
      <div class="winTitleBar">
        <p>DNI(W/m²) vs Time(hh:mm:ss)</p>
        <div class="winClose" id="closeWindow3" onclick="maximFN('tileWindow3','winContentBar',this);"></div>
      </div>
      <div class="winContent" id="winContentBar"> 
      			
                         
      </div>
    </div>
  </div>
		
		<div class="contatinerclass3 tile" id="contatinerclass3">
				<div class="tileWindow" id="tileWindow4">
						<div class="winTitleBar">
								<p id="headLineView">Image view</p>
								<div class="winClose" id="closeWindow4" onclick="maximFN('tileWindow4','winContentVideo',this);"></div>
						</div>
						<div class="winContent" id="winContentVideo">
                                                        <div id="imageDiv"></div>
 <video id="videoLivePos" src="<?php echo $VideoElement?>" autoplay="autoplay"> Your browser doesn't appear to support the HTML5 <code>&lt;video&gt;</code> element.</video>
						</div>
				</div>
		</div>
  
  <div class="clear"></div>
</div>

