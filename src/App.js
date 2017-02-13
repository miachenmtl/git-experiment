import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          Some change in first-pr.
          Some change in third-pr.
          Some change in pr-a.
        </p>
        <p>
          A second pr change.
          I don't know what's going on in pr-c.
        </p>
      </div>
    );
  }
}

export default App;
