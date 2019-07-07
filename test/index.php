<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>PHP TEST PAGE HOGE HOGE</title>
</head>
<h1>PHPのテストです</h1>
<p>今日の日付は
    <?php
echo date('Y年m月d日');
?>
    です。</p>
<?php
$user_agent = $_SERVER['HTTP_USER_AGENT'];
echo $user_agent;
?>
<!--カレンダーPHP-->
<?php
function color_get($i) {
    if ($i == 0) return '#ff0000'; elseif ($i == 6) return '#0000ff'; else return '#000000';
}
$m = $_GET['m'];
if ($m) {
    $year = date('Y', strtotime($m . '01'));
    $month = date('n', strtotime($m . '01'));
} else {
    $year = date('Y');
    $month = date('n');
}
$day = date('j');
$weekday = array('日', '月', '火', '水', '木', '金', '土');
echo '<TABLE cellpadding="4" cellspacing="1" style="background-color : #aaaaaa;text-align : center;"><CAPTION style="padding : 4px;"><A href="?m=' . date('Ym', mktime(0, 0, 0, $month , 1, $year - 1)) . '">&lt;&lt;</A> <A href="?m=' . date('Ym', mktime(0, 0, 0, $month - 1 , 1, $year)) . '">&lt;</A> ' . $year . '年' . $month . '月 <A href="?m=' . date('Ym', mktime(0, 0, 0, $month + 1 , 1, $year)) . '">&gt;</A> <A href="?m=' . date('Ym', mktime(0, 0, 0, $month , 1, $year + 1)) . '">&gt;&gt;</A></CAPTION><TBODY><TR>';
$i = 0;
while ($i <= 6) {
    $c = color_get($i);
    echo '<TD style="color : ' . $c . ';background-color : #eeeeee;">' . $weekday[$i] . '</TD>';
    $i++;
}
echo '</TR><TR>';
$i = 0;
while ($i != date('w', mktime(0, 0, 0, $month, 1, $year))) {
    echo '<TD style="background-color : #ffffff;">　</TD>';
    $i++;
}
for ($days = 1; checkdate($month, $days, $year); $days++) {
    if ($i > 6) {
        echo '</TR><TR>';
        $i = 0;
    }
    $c = color_get($i);
    if ($days == $day) $bc = '#ffff00'; else $bc = '#ffffff';
    echo '<TD style="color : ' . $c . ';background-color : ' . $bc . ';">' . $days . '</TD>';
    $i++;
}
while ($i < 7) {
    echo '<TD style="background-color : #ffffff;">　</TD>';
    $i++;
}
echo '</TR></TBODY></TABLE>';
?>
<body>
</body>
</html>