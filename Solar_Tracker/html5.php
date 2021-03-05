<img id="AlertImage" style="width: 80px;height: 80px;margin-left: 64px;margin-top: 194px;"src="<?php getSimPath(); ?>images/imgalert.png">
<?php
$sunrise=date_sunrise(time(),SUNFUNCS_RET_STRING, 9.095047,76.492455,90.5546,5.5);
//echo "SunRise:<br />".$sunrise."<br />"; 
$sunset=date_sunset(time(),SUNFUNCS_RET_STRING, 9.095047,76.492455,90.5546,5.5);
//echo "SunSet:<br />".$sunset;
date_default_timezone_set('Asia/Calcutta');
$timestamp=date("H:i", time());
if($timestamp>=$sunrise && $timestamp<=$sunset)
{
	//echo "time between sun rise  and sun set";
}
else
{
	//echo "time before  sun rise   and  after sun set";
	$notactiveMessage = "<h1 style='font-size:24px; margin-top: -57px;margin-left: 54px;'>This experiment is not active at the moment.<br/>Please try this experiment in Indian Standard Time </h1>";
	echo $notactiveMessage;
	exit();
}
?>

<?php
//Your Simulator Name Here
$simName="Global Horizontal, Diffused Horizontal and Direct Normal Irradiance";
//$simName="Direct Normal Irradiation and Concentrating Solar Thermal Site Analysis - Pyrheliometer"
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

