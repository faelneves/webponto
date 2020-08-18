<?php
include ("./Conexao.php");

class PessoaService extends Conexao{
    
    public function insertPessoa($dados){
        $connect =$this->connectDB();
        $sql ='INSERT INTO pessoa (nrpessoa, nome, dtnasc, email, telefone, horasDia, senha) VALUES (NULL, '.($dados['nome'] ? "'".$dados['nome']."'" : 'NULL').', '.($dados['dtnasc'] ? "'".$dados['dtnasc']."'" : 'NULL').', '.($dados['email'] ? "'".$dados['email']."'" : 'NULL').', '.($dados['telefone'] ? "'".$dados['telefone']."'" : 'NULL').', '.($dados['horasDia'] ? "'".$dados['horasDia']."'" : 'NULL').', '.($dados['senha'] ? "'".$dados['senha']."'" : 'NULL').')';
        
        if (mysqli_query($connect, $sql)) {
            return ['status' => 'success', 'Message' => 'Conta Criada com Sucesso!'];
        } else {
           echo "Error: " . $sql . "" . mysqli_error($connect);
        }
        $connect->close();
    }

    public function getPessoa(){
        $connect =$this->connectDB();
        $query = $connect->query("SELECT * FROM PESSOA");
        $registros = array();
        while($row = $query->fetch_assoc()){
            $registros[] = $row;
        }
    }
    
    public function getPessoaLogin($dados){
        $connect =$this->connectDB();
        $sql = "SELECT * FROM PESSOA WHERE EMAIL = '".$dados['email']."' AND SENHA  = '".$dados['senha']."'";
        $query = $connect->query($sql);
        $registros = array();
        while($row = $query->fetch_assoc()){
            $registros[] = $row;
        }
        return $registros;
    }
    
}