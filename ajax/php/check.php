
<?php
//Перевірка полів на те щоб вони не містили пробіли або різні теги  html
$login=filter_var(trim($_POST['login']),FILTER_SANITIZE_STRING);
$name=filter_var(trim($_POST['name']),FILTER_SANITIZE_STRING);
$phone=filter_var(trim($_POST['phone']),FILTER_SANITIZE_STRING);
$email=filter_var(trim($_POST['email']),FILTER_SANITIZE_STRING);
$pass=filter_var(trim($_POST['pass']),FILTER_SANITIZE_STRING);


// Переведення паролю в хеш

$login=md5($login."fdgdfgdfvxcv12312434554");
$pass=md5($pass."fdgdfgdfvxcv12312434554");

//Підключення до бази даних
$mysql=new mysqli('localhost','root','','register');

$query=mysqli_query($mysql,"SELECT `email` FROM `users` WHERE `email`='$email'");
if(mysqli_num_rows($query)>0)
{
    echo "Користувач з таким емайлом вже існує";
}else{
//Занесення користувача в базу даних
$mysql->query("INSERT INTO `users`(`login`,`name`,`phone`,`email`,`pass`) VALUES('$login','$name','$phone','$email','$pass')");
//Вихід з бази даних
$mysql->close(); 
}
//Перенаправлення на головну сторінку
header('Location:/ajax/');
exit();
// }

?>