import React, { Component } from 'react';
import { Button, Grid, Paper, Container} from '@material-ui/core';
import NavBar from './components/NavBar';
import Clock from './components/Clock';
import http from './components/HttpRequest';


export default class Marcacao extends Component { 
  
    constructor(props) {
        super(props);
        this.state = {
            mensagem: ''
        };
        this.sendMarcacao = this.sendMarcacao.bind(this);
    };
    
    sendMarcacao() {
        http.post('registraMarcacao',this.state)
        .then((response)=>response.json())
        .then((responseJson)=>
        {
            if(responseJson['status'] == 'error'){
                this.setState({ mensagem: responseJson['Message'] });
            }else if(responseJson['status'] == 'success'){
                this.setState({ mensagem: responseJson['Message'] });
            }
                
        });
    };

    
    render() {
        return (
        <div>
            <NavBar
                title="Marcação"
            />
            <Container component="main" maxWidth="xs">
                <Grid style={{ width: '100%', marginTop: '20%',}}>
                    <p style={{ textAlign: 'center'  }}>{this.state.mensagem}</p>
                    <Paper>
                    <div style={{ textAlign: 'center'  }}>
                        <h1>Horário Atual: </h1>
                        <h2><Clock/></h2>
                    </div>
            
                        <Button
                            onClick={this.sendMarcacao}
                            variant="outlined"
                            fullWidth
                            style={{ margin: 8,  width: '95%', color:'green', borderColor:'green'}}
                        >
                            Registrar Marcação
                        </Button>
                    </Paper>          
                </Grid>
            </Container>
        </div>
        
        );
    }
  
}
  