import React, { Component } from 'react';
import { connect } from 'react-redux'

import MainContent from "./components/MainContent.js"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

import { displayPage } from './actions'

import './css/App.css';

class App extends Component {
   constructor(props) {  
      super(props);

      this.state = {
         display: "HOME_PAGE"
      };
  }

   render() {
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
