<?php
include ("./PessoaService.php");

class LoginController {
    
    public function login($dados){
        $pessoaService = new PessoaService();
        $pessoa = $pessoaService->getPessoaLogin($dados['params']);
        if(empty($pessoa)){
            $data = ['status' => 'error', 'Message' => 'Usuário ou Senha inválidos!'];
            echo (json_encode( $data ));          
        }else {
            $_SESSION["nrpessoa"] = $pessoa[0]['nrpessoa'];
            $_SESSION["horasDia"] = $pessoa[0]['horasDia'];
            $data = ['status' => 'success', 'Message' => 'Sessão Iniciada!'];
            echo (json_encode( $data ));  
        }
    }
    
}