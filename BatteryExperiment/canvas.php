<!--Do not edit section-->
<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
	<?php
	
$VideoElement = "http://amrita.vlab.co.in/RT/MEC/102/8089/creepcam.ogg?id=".rand(10,1000)*0.002101;
?>

</script>
<!--[if lt IE 9]><script language="javascript" type="text/javascript" src="<?php getSimPath(); ?>js/excanvas.js"></script><![endif]-->

<script language="javascript" type="text/javascript" src="<?php getSimPath(); ?>js/jQueryRotate.js"></script>
<script language="javascript" type="text/javascript" src="<?php getSimPath(); ?>js/jquery.flot.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/ajax.js"></script>
<!--//Do not edit section ends here-->
<!--//Note: Use <?php //getSimPath(); ?> as the parent directory to access directories in simulator root path-->
<!--Your html code for canvas here-->

<div class="contatinerclass" >
		<div id="contatinerclass0" class="tile wideTile" >
							
				<div class="tileWindowlengthy" id="tileWindowlengthy">
						<div class="winTitleBar">
								<p>Simulator</p>
								<div class="winClose" id="closeWindow" onclick="maximFN('tileWindowlengthy','winContentSimulator',this);"></div>
						</div>
						<div class="winContent" id="winContentSimulator">
                        <span  id="spansim" style="width:100%; height:100%;">
                        		<img id="Imgrheoandstand" src="<?php getSimPath(); ?>images/box-rheo-and-fanstand.png" style="width: 553px;height: 200px;margin: 0px 0px 11px 0px; "/>
							 	<img id="Imgfanleaf" src="<?php getSimPath(); ?>images/fan leaf.png" style="width:91px;margin: -203px 0px 116px 418px;z-index: 1; "/>	
                              	<img id="Imgfantop" src="<?php getSimPath(); ?>images/fan top.png" style="width: 115px;height: 115px;margin: -206px 2px 104px -107px;z-index: 2;  position: relative;"/>   
                           		<img id="Imgrheomove" src="<?php getSimPath(); ?>images/Rheostat object move.png" style="width:19px;height: 20px;margin: -93px 2px 85px -286px;position: relative;"/>
                        </span>
                        </div>
				</div>
		</div>
		<p>&nbsp;</p>
        <div id="contatinerclass2" class="tile wideTile" >
							
				<div class="tileWindowlengthy" id="tileWindowlengthy1">
						<div class="winTitleBar">
								<p id="graphplot">Graph</p>
								<div class="winClose" id="closeWindow" onclick="maximFN('tileWindowlengthy1','winContentBar',this);"></div>
						</div>
						<div class="winContent" id="winContentBar">
                        </div>
				</div>
		</div>
</div>
<!--<div class="contatinerclass">

<div class="contatinerclass3 tile" id="contatinerclass3">
				<div class="tileWindow" id="tileWindow2">
						<div class="winTitleBar">
								<p id="headLineView">Simulator</p>
								<div class="winClose" id="closeWindow" onclick="maximFN('tileWindow2','winContentsimulator',this);"></div>
						</div>
						<div class="winContent" id="winContentsimulator">
                        		<img id="Imgrheoandstand" src="<?php getSimPath(); ?>images/box-rheo-and-fanstand.png" style="width: 553px;height: 200px;margin: 0px 0px 11px 0px; "/>
							 	<img id="Imgfanleaf" src="<?php getSimPath(); ?>images/fan leaf.png" style="width:91px;margin: -203px 0px 116px 418px;z-index: 1; "/>	
                              	<img id="Imgfantop" src="<?php getSimPath(); ?>images/fan top.png" style="width: 115px;height: 115px;margin: -206px 2px 104px -107px;z-index: 2;  position: relative;"/>   
                           		<img id="Imgrheomove" src="<?php getSimPath(); ?>images/Rheostat object move.png" style="width:19px;height: 20px;margin: -93px 2px 85px -286px;position: relative;"/>
						</div>
				</div>
		</div>
<p>&nbsp;</p>
		<div id="contatinerclass0" class="tile wideTile" >
				<div class="tileWindowlengthy" id="tileWindowlengthy">
						<div class="winTitleBar">
								<p id="graphplot">Graph</p>
								<div class="winClose" id="closeWindow" onclick="maximFN('tileWindowlengthy','winContentBar',this);"></div>
						</div>
						<div class="winContent" id="winContentBar"></div>
				</div>
		</div>-->
		
		<!--<div class="contatinerclass2 tile" id="contatinerclass2" >
				<div class="tileWindow" id="tileWindow1">
						<div class="winTitleBar">
								<p  id="headLineYoung"> Poisson's ratio Vs time </p>
								<div class="winClose" id="closeWindow" onclick="maximFN('tileWindow1','winContentLine',this);"></div>
						</div>
						<div class="winContent1" id="winContentLine"> </div>
				</div>
		</div>
        -->
        
		
<!--</div>-->