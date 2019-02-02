import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './../css/index.css';
import './../css/Header.css';

/**
    Header for the site. Should display title and collapsable menu buttons.
*/
class Header extends Component {
  render() {
    return (
      <header>
        <Navbar collapseOnSelect expand="md" variant="dark">
          <Navbar.Brand href="#home">Chase Dreszer's Travel Photos</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link href="#main-content">About</Nav.Link>
              <Nav.Link href="#home-directory">Countries</Nav.Link>
              <Nav.Link href="#nature">Nature</Nav.Link>
              <Nav.Link href="#animals">Animals</Nav.Link>
              <Nav.Link href="#contact-info">Contact</Nav.Link>
              <Nav.Link id="phone" href="tel:858-395-6663" className="d-xs-none d-sm-block ">
                <span>858-395-6663</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header> 
    );
  }
}

export default Header;

//DROPDOWN MENU --- maybe make countries a dropdown
              // <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              //   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              //   <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              //   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              //   <NavDropdown.Divider />
              //   <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              // </NavDropdown>
