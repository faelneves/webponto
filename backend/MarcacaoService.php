<?php
include ("./Conexao.php");

class MarcacaoService extends Conexao{
    
    public function registraMarcacao(){
        $connect =$this->connectDB();
        $dia = date('d/m/Y', time());
        $hora = date('H:i:s',time());
        $marcDia = $this->getMarcacoesDia();
        if(count($marcDia)>=4){
            return ['status' => 'error', 'Message' => 'Todas Marcações Diárias já realizadas!'];
        }
        $sql ="INSERT INTO marcacao (nrmarcacao, nrpessoa, dtmarcacao, hrmarcacao) VALUES (NULL, '".$_SESSION['nrpessoa']."', STR_TO_DATE('".$dia."','%d/%m/%Y'), '".$hora."')";
       
        if (mysqli_query($connect, $sql)) {
            return ['status' => 'success', 'Message' => 'Marcação Realizada com Sucesso!'];
        } else {
            return ['status' => 'error', 'Message' => 'Erro: '.mysqli_error($connect)];
        }
    }

    public function getMarcacoesDia(){
        $connect =$this->connectDB();
        $dia = date('d/m/Y', time());
        $query = $connect->query("SELECT * FROM MARCACAO WHERE NRPESSOA =". $_SESSION['nrpessoa'] ." AND DTMARCACAO = STR_TO_DATE('". $dia ."','%d/%m/%Y')");
        $registros = array();
        while($row = $query->fetch_assoc()){
            $registros[] = $row;
        }
        $connect->close();
        return $registros;
    }
    
    public function getMarcacaos(){
        $connect =$this->connectDB();
        $dia = date('d/m/Y', time());
        $query = $connect->query("SELECT QRY.*, TIMEDIFF(QRY.hrEntrada2,QRY.hrSaida1) hrIntervalo from 
                (SELECT DISTINCT MC.dtmarcacao, 
                    (SELECT hrmarcacao FROM marcacao WHERE nrpessoa = mc.nrpessoa AND dtmarcacao = MC.dtmarcacao LIMIT 0, 1) 	hrEntrada1,
                    (SELECT hrmarcacao FROM marcacao WHERE nrpessoa = mc.nrpessoa AND dtmarcacao = MC.dtmarcacao LIMIT 1, 1) 	hrSaida1,
                    (SELECT hrmarcacao FROM marcacao WHERE nrpessoa = mc.nrpessoa AND dtmarcacao = MC.dtmarcacao LIMIT 2, 1) 	hrEntrada2,
                (SELECT hrmarcacao FROM marcacao WHERE nrpessoa = mc.nrpessoa AND dtmarcacao = MC.dtmarcacao LIMIT 3, 1) 	hrSaida2
                    FROM MARCACAO MC WHERE NRPESSOA = ". $_SESSION['nrpessoa']." ) QRY");
        $registros = array();
        while($row = $query->fetch_assoc()){
            $registros[] = $row;
        }
        $connect->close();
        return $registros;
    }
    
}