<?php
// Incluir el archivo de base de datos
include_once("../clases/class.Database.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request = (array)$request;

if (isset($request['id'])) { //Update
    $sql = "UPDATE clientes
        SET nombre='". $request['nombre'] ."',
            correo='". $request['correo'] ."',
            zip='". $request['zip'] ."',
            telefono1='". $request['telefono1'] ."',
            telefono2='". $request['telefono2'] ."',
            pais='". $request['pais'] ."',
            direccion='". $request[direccion] ."'
        WHERE id = ".$request['id'];

    $result = Database::ejecutar_idu($sql);

    if (is_numeric($result) or $result === true) {
        $response = array('err' => false, 'Mensaje' => 'Registro actualizado');
    } else {
        $response = array('err' => true, 'Mensaje' => $result);
    }

} else { //Insert
    echo ('Insertar');
}

echo json_encode($response);

?>
