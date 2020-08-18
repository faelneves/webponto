import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Grid, Paper, Container} from '@material-ui/core';
import NavBar from './components/NavBar';
import http from './components/HttpRequest';

export default class HistoricoMarcacao extends Component { 
  
    constructor(props) {
        super(props);
        this.state = {
            rows: []
        };
    };
    
    componentDidMount() {
        http.post('getMarcacaos',this.state)
        .then((response)=>response.json())
        .then((responseJson)=>
        {
            this.setState({ rows: responseJson});
        });
    
      }
    
    render() {
        return (
        <div>
            <NavBar
                title="Histórico de Marcações"
            />
            <Container component="main">
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Data</TableCell>
                        <TableCell align="right">Hr. Entrada 1</TableCell>
                        <TableCell align="right">Hr. Saída 1</TableCell>
                        <TableCell align="right">Intervalo</TableCell>
                        <TableCell align="right">Hr. Entrada 2</TableCell>
                        <TableCell align="right">Hr. Saída 2</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.rows.map((row) => (
                        <TableRow key={row.dtmarcacao}>
                        <TableCell component="th" scope="row">
                            {row.dtmarcacao}
                        </TableCell>
                        <TableCell align="right">{row.hrEntrada1}</TableCell>
                        <TableCell align="right">{row.hrSaida1}</TableCell>
                        <TableCell align="right">{row.hrIntervalo}</TableCell>
                        <TableCell align="right">{row.hrEntrada2}</TableCell>
                        <TableCell align="right">{row.hrSaida2}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Container>
        </div>
        
        );
    }
  
}
  