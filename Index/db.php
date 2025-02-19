<?php
$host = "127.0.0.1";
$user = "root"; // Cambia si tienes otro usuario
$pass = "sistemaconfeccion123"; // Deja vacío si no tienes contraseña
$dbname = "project_systemproduction";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>

<?php
include 'db.php';

$sql = "SELECT * FROM Users";
$result = $conn->query($sql);

while ($row = $result->fetch_assoc()) {
    echo "ID: " . $row["id"] . " - Nombre: " . $row["nombre"] . "<br>";
}
?>