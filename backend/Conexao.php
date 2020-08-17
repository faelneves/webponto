<?php
abstract class Conexao{

#conexão com o banco de dados
    protected function connectDB()
    {
        try{
            $user = 'root';
            $password = ''; 
            $database = 'webponto'; 
            $port = 3306;
            $mysqli = new mysqli('127.0.0.1', $user, $password, $database, $port);

            if ($mysqli->connect_error) {
                die('Connect Error (' . $mysqli->connect_errno . ') '
                        . $mysqli->connect_error);
            }
            
            return $mysqli;
        }catch (Exception $Erro){
            return $Erro->getMessage();
        }
    }
}