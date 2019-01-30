import React, { Component } from 'react';

import './../css/index.css';
import './../css/Header.css';

/**
    Header for the site. Should display title and collapsable menu buttons.
*/
class Header extends Component {
  render() {
    return (
      <header>
        <nav id="header-nav" className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <div className="navbar-brand">
                <a href="index.html">
                  <h1>Chase Dreszer's Travel Photos</h1>
                </a>
              </div>
              <button type="button" className="navbar-toggle collapsed d-md-none" data-toggle="collapse" data-target="#collapsable-nav" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div id="collapsable-nav" className="collapse navbar-collapse">
               <ul id="nav-list" className="nav navbar-nav navbar-right">
                <li>
                  <a href="#"> About</a>
                </li>
                <li>
                  <a href="#"x> Nature</a>
                </li>
                <li>
                  <a href="#"x> People</a>
                </li>
                <li>
                  <a href="#"x> Animals</a>
                </li>
                <li>
                  <a href="#"> Contact</a>
                </li>
                <li id="phone" className="d-sm-block d-md-none">
                  <a href="tel:858-395-6663">
                    <span>858-395-6663</span></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header> 
    );
  }
}

export default Header;