import React from 'react';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Register from './Register';
import Login from './Login';
import Marcacao from './Marcacao';
import HistoricoMarcacao from './HistoricoMarcacao';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/marcacao">
            <Marcacao />
          </Route>
          <Route path="/historicoMarcacao">
            <HistoricoMarcacao />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
