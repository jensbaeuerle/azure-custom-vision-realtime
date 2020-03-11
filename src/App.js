import React, { Component } from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import Header from './components/layout/header';
import Footer from './components/layout/footer';

import CustomVision from './components/CustomVision';

// import CustomVision from './components/custom-vision';


// import { Router } from 'react-router-dom';

require('dotenv').config({ path: '../.env' })

class App extends Component {
  render(){
    return (
      <div className="App">

        <Header />
        <CustomVision/>
        {/* <Footer /> */}

      </div>
    );
  }
}

export default App;
