import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
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
    <BrowserRouter>
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </BrowserRouter>
  );
  }
}

export default App;