import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Ap1p extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


class App extends Component {
    render() {
        return (
            <div class="container" >
            <div class="row">
                <div class="col-md-12">
                    <div class="customDiv">col-sm-12</div>
                </div>
                <div class="col-sm-3">
                    <div class="++6customDiv">col-sm-3</div>
                </div>
                <div class="col-md-6">
                    <div class="customDiv">col-sm-3</div>
                </div>
                <div class="col-sm-3">
                    <div class="customDiv">col-sm-3</div>
                </div>
            </div>

            </div>

    );
    }
}

export default App;
