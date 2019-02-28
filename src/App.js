import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import MainContent from "./components/MainContent.js"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

import './css/App.css';

class App extends Component {
   constructor(props) {  
      super(props);
  }

  render() {
  return (
    <HashRouter>
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </HashRouter>
  );
  }
}

export default App;