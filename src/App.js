import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';
import Login from './components/auth/Login';
import {clientId, issuer, baseUrl} from './config';
// const clientId = require('./config').clientId;
import './App.css';


function onAuthRequired({ history }) {
  history.push('/login')
}


class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer={issuer}
          client_id={clientId}
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <Navbar />
            <Route path="/" exact={true} component={Home} />
            <SecureRoute path="/staff" exact={true} component={Staff} />

            <Route
                path="/login"
                render={() => (
                  <Login baseUrl={baseUrl} />
                )}
              />
            <Route path="/implicit/callback" component={ImplicitCallback} />
            

          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
