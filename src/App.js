import React, { Component } from 'react';

import MainContent from "./components/MainContent.js"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

import './css/App.css';

class App extends Component {
   constructor(props) {  
      super(props);
  }

  // <BrowserRouter></BrowserRouter>
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