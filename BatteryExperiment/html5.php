<?php
//Your Simulator Name Here
$simName="Temperature and discharge rate dependence on battery capacity";
?>

<div class="g594 canvasHolder"> 
    <div id="canvasBox">
<?php
//custom canvas file included here
include('canvas.php');
?>
</div>
</div>
<div class="g198 controlHolder">
<?php
//custom controls file included here
include('controls.php');
?>
</div>
<script type="text/javascript">
 var expTitle="<?php echo $simName; ?>";
 document.getElementById("expName").style.size="11px";
 document.getElementById("expName").innerHTML=expTitle;
// var stationflag=1;

var strArray1=new Array();
var strArray2=new Array();
var strArray3=new Array();
var strArray4=new Array();
var strArray5=new Array();
var strArray6=new Array();

var stressArray1=new Array();
var stressArray2=new Array();
var stressArray3=new Array();
var stressArray4=new Array();
var stressArray5=new Array();
var stressArray6=new Array();


var currentArray=new Array();
var yvalArray1=new Array();
var yvalArray2=new Array();
var yvalArray3=new Array();


var calebcount=0;
var xmlUrl=simPath+"xmlLoad.php?loadLink="+calebcount;



</script>

