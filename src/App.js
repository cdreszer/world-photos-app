import React, { Component } from 'react';
import { connect } from 'react-redux'

import MainContent from "./components/MainContent.js"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

import { displayPage } from './actions'
import { directories as jsonDirectories } from './components/images.js'

import './css/App.css';

class App extends Component {
   constructor(props) {  
      super(props);

      this.state = {
         directories: jsonDirectories
      };
  }

   render() {
    return (
      <div>
        <Header directories={this.state.directories}/>
        <MainContent directories={this.state.directories}/>
        <Footer />
      </div>
    );
  }
}

export default App;
