<?php
setcookie('user',$user['email'],time()-3600*24,"/");
header('Location:/ajax/');
?>