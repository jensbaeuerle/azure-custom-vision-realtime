import React, { Component } from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import Header from './components/layout/header';
import Dashboard from './components/layout/dashboard';
// import { Router } from 'react-router-dom';

require('dotenv').config({ path: '../.env' })

class App extends Component {
  render(){
    return (
      <div className="App">
  
        <Header />
        <Dashboard />
        
      </div>
    );
  }
}

export default App;
