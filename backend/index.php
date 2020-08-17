<?php
try{
    echo('debug');
    session_start();
} catch(Exception $ex){
    echo('debug');
    echo($ex);
}
echo('debug');die;
var_dump(session_start());die;
if (session_id() == "")
    session_start();
$dados=json_decode(file_get_contents("php://input"),true);
if($dados['params']['route']){
    switch ($dados['params']['route']) {
        case 'createPessoa':
            include("PessoaController.php");
            $Pessoa = new PessoaController();
            $Pessoa->insertPessoa($dados);
        break;
        case 'login':
            include("LoginController.php");
            $Login = new LoginController();
            $Login->login($dados);
        break;
    }
}

