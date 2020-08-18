<?php
/*CONFIGURA DADOS DA SEÇÃO */
session_cache_limiter('public:');
if (session_status() !== PHP_SESSION_ACTIVE) {
    session_cache_expire(60);
    session_start(['cookie_lifetime' => 43200,'cookie_secure' => false,'cookie_httponly' => true]);
}
error_reporting(E_ALL);
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    exit(0);
}
header('Content-type: application/json');
date_default_timezone_set('America/Sao_Paulo');

/*CHAMADA DA ROTA */
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
        case 'registraMarcacao':
            include("MarcacaoController.php");
            $marcacao = new MarcacaoController();
            $marcacao->registraMarcacao($dados);
        break;
        case 'getMarcacaos':
            include("MarcacaoController.php");
            $marcacao = new MarcacaoController();
            $marcacao->getMarcacaos($dados);
        break;
    }
}

