<?php
    header("content-type:text/html; charset=gb2312");
    echo "<img src=\"kobe.jpeg\" style=\"width:300px;\"><br/>";
?>

让牢大对你说<?php echo $_POST["text"]; ?>!
<br/>

<?php
header("content-type:text/html; charset=gb2312");
$words = $_POST["text"];
if(strtolower($words) == "man") {
    echo "<audio src=\"man.mp3\" id=\"dd\" autoplay=\"autoplay\" controls=\"controls\"></audio>";
}
else if(strtolower($words) == "what can i say") {
    echo "<audio src=\"wcis.mp3\" id=\"dd\" autoplay=\"autoplay\" controls=\"controls\"></audio>";
}
else if(strtolower($words) == "mamba out") {
    echo "<audio src=\"mambaout.mp3\" id=\"dd\" autoplay=\"autoplay\" controls=\"controls\"></audio>";
}
else if(strtolower($words) == "man! what can i say") {
    echo "<audio src=\"mwcis.mp3\" id=\"dd\" autoplay=\"autoplay\" controls=\"controls\"></audio>";
}
else {
    echo "<audio src=\"whole.mp3\" id=\"dd\" autoplay=\"autoplay\" controls=\"controls\"></audio>";
}
?>