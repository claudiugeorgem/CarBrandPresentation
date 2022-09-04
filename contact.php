<?php
$user='root';
$pass='';
$database='claudiu';
$conn = mysqli_connect('localhost', $user, $pass, $database) or die("Stopped working!");

$adresare=$_POST['sex'];
$nume=$_POST['nume'];
$prenume=$_POST['prenume'];
$telefon=$_POST['telefon'];
$mail=$_POST['mail'];
$varsta=$_POST['varsta'];
$judet=$_POST['oras'];
$mesaj=$_POST['subject'];

$query="INSERT INTO formular VALUES('$adresare','$nume','$prenume','$telefon','$mail','$varsta','$judet','$mesaj')";
$result=$conn->query($query);

header('Location: contact.html');
?>