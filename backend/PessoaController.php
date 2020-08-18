<?php
include ("./PessoaService.php");

class PessoaController {
    
    public function insertPessoa($dados){
        $service = new PessoaService();
        $response = $service->insertPessoa($dados['params']);
        echo (json_encode( $response )); 
    }
    
}