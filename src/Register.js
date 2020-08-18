import React, { Component, Fragment} from 'react';
import { Button, Grid, Paper, TextField} from '@material-ui/core';
import NavBar from './components/NavBar';
import http from './components/HttpRequest';


export default class Register extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            nome: null,
            dtnasc: null,
            email: null,
            telefone: null,
            horasDia: null,
            senha: null
        };
        this.ChangeForm = this.ChangeForm.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    };
    
    formSubmit(event) {
        event.preventDefault();
        http.post('createPessoa',this.state).then((response)=>response.json())
        .then((responseJson)=>
        {
            if(responseJson['status'] == 'success'){
                window.location.href= './';
            }
                
        });;
    };
    
    ChangeForm (event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    };
    
    render() {
        return (
        <div>
            <NavBar
                title="Cadastro"
            />
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Paper>
                    <form onSubmit={this.formSubmit}>
                        <TextField 
                            name = "nome" 
                            label="Nome"
                            required 
                            id="standard-required"                             
                            style={{ margin: 8, width: '45%'}}
                            onChange={this.ChangeForm}
                            margin="normal"
                        />
                        <TextField 
                            name = "dtnasc"
                            label="Dt. Nascimento"
                            id="date" 
                            type="date"
                            style={{ margin: 8, width: '45%' }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.ChangeForm}
                        />
                        <TextField 
                            name="email"
                            label="E-mail" 
                            required
                            id="standard-required" 
                            style={{ margin: 8, width: '45%' }}
                            onChange={this.ChangeForm}
                        />
                        <TextField 
                            name="telefone"
                            label="Telefone" 
                            id="standard-required" 
                            style={{ margin: 8, width: '45%' }}
                            onChange={this.ChangeForm}
                        />
                        <TextField
                            name="horasDia"
                            label="Horas Diárias"
                            id="time"
                            type="time"
                            style={{ margin: 8, width: '45%' }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.ChangeForm}
                        />
                        <TextField 
                            label="Senha" 
                            name="senha"
                            required 
                            id="standard-password-input" 
                            type="password"
                            style={{ margin: 8, width: '45%' }}
                            onChange={this.ChangeForm}
                        />
                        <Button
                            type="submit"
                            style={{ margin: 8, width: '45%' }}
                            variant="outlined"
                            color="primary"
                        >
                            Registrar
                        </Button>
                        <Button
                            style={{ margin: 8, width: '45%' }}
                            variant="outlined"
                            color="secondary"
                            href="./"
                        >
                            Cancelar
                        </Button>
                    </form>
                    </Paper>          
                </Grid>
            </Grid>
        </div>
        
        );
    }
  
}
  