<?php
include ("./PessoaService.php");

class PessoaController {
    
    public function insertPessoa($dados){
        $service = new PessoaService();
        $service->insertPessoa($dados['params']);
    }
    
}