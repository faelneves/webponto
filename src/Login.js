import React, { Component, Fragment} from 'react';
import { Button, Grid, Paper, TextField, Container} from '@material-ui/core';
import NavBar from './components/NavBar';
import http from './components/HttpRequest';


export default class Login extends Component { 
  
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            senha: null
        };
        this.ChangeForm = this.ChangeForm.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    };
    
    formSubmit(event) {
        event.preventDefault();
        http.post('login',this.state);
    };
    
    ChangeForm (event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    };
    
    render() {
        return (
        <div>
            <NavBar/>
            <Container component="main" maxWidth="xs">
                <Grid style={{ width: '100%', 'margin-top': '20%',}}>
                    <Paper>
                    <form onSubmit={this.formSubmit}>
                        <TextField 
                            name="email"
                            label="E-mail" 
                            id="standard-required"
                            required
                            fullWidth
                            style={{ margin: 8, width: '95%'}} 
                            onChange={this.ChangeForm}
                        />
                        <TextField 
                            label="Senha" 
                            name="senha"
                            type="password"
                            id="password" 
                            required 
                            fullWidth
                            style={{ margin: 8, width: '95%'}}
                            onChange={this.ChangeForm}
                        />
                        <Button
                            type="submit"
                            variant="outlined"
                            color="primary"
                            fullWidth
                            style={{ margin: 8,  width: '95%'}}
                        >
                            Entrar
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            fullWidth
                            style={{ margin: 8, width: '95%'}}
                            href="./register"
                        >
                            Cadastrar
                        </Button>
                    </form>
                    </Paper>          
                </Grid>
            </Container>
        </div>
        
        );
    }
  
}
  