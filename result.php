<?php
//formの受け取り
$grayscal = $_POST['grayscale'];
$sepia = $_POST['sepia'];
$saturate = $_POST['saturate'];
$hue_rotate = $_POST['hue-rotate'];
$invent = $_POST['invent'] ;
$opacity = $_POST['opacity'];
$brightness = $_POST['brightness'];
$contrast = $_POST['contrast'];
$blur = $_POST['blur'];

//出力
print
"
img{ <br>
&emsp; filter: grayscale(".$grayscal."%)<br>
&emsp;        sepia(".$sepia."%)<br>
&emsp;        saturate(".$saturate."%)<br>
&emsp;        hue-rotate(".$hue_rotate."deg)<br>
&emsp;        invent(".$invent."%)<br>
&emsp;        opacity(".$opacity."%)<br>
&emsp;        brightness(".$brightness."%)<br>
&emsp;        contrast(".$contrast."%)<br>
&emsp;        blur(".$blur."px);<br>
}
"

?>