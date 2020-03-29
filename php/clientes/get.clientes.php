<?php
// Incluir el archivo de base de datos
include_once("../clases/class.Database.php");

$response = Database::get_todo_paginado('clientes');

echo json_encode($response);

?>