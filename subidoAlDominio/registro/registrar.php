<?php
//este archivo es solo PHP
$name = $_POST["name"];
$surname = $_POST["surname"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$city = $_POST["city"];
$participants = $_POST["participants"];
$gender = $_POST["gender"];
$comments = $_POST["comments"];


//vamos a guardar la información en la base de datos db_mag
//vamos a usar red bean php
include "rb-mysql.php";
//configurar red bean
R::setup('mysql:host=;dbname=', '', '');

$user = R::dispense('users');

$user->name = $name;
$user->surname = $surname;
$user->email = $email;
$user->phone = $phone;
$user->city = $city;
$user->participants = $participants;
$user->gender = $gender;
$user->comments = $comments;

//con los datos listos, los guardamos en la db
R::store($user);

echo "Data saved succesfully. Enjoy the exibit. <br><br>";
echo "Name: $name <br>";
echo "Surname: $surname <br>";
echo "Email: $email <br>";
echo "Phone: $phone <br>";
echo "City: $city <br>";
echo "Nº of participants: $participants <br>";
echo "Gender: $gender <br>";
echo "Comments: $comments <br>";
