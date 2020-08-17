<?php
include ("./PessoaService.php");

class LoginController {
    
    public function login($dados){
        $pessoaService = new PessoaService();
        $pessoa = $pessoaService->getPessoaLogin($dados['params']);
        if(empty($pessoa)){
            var_dump($_SESSION);
            echo("Usuário ou Senha inválidos!");
        }else {
            $_SESSION["nrpessoa"] = $pessoa[0]['nrpessoa'];
            $_SESSION["horasDia"] = $pessoa[0]['horasDia'];
            var_dump($_SESSION);
            echo("Sessão Iniciada!");
            
        }
    }
    
}