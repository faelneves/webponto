<?php
include ("./MarcacaoService.php");

class MarcacaoController {
    
    public function registraMarcacao($dados){
        $marcacaoService = new MarcacaoService();
        $response = $marcacaoService->registraMarcacao();
        echo (json_encode( $response ));    
    }
    
    public function getMarcacaos($dados){
        $marcacaoService = new MarcacaoService();
        $response = $marcacaoService->getMarcacaos();
        echo (json_encode( $response ));    
    }
    
}