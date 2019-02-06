import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {displayPage} from '../actions'

import './../css/index.css';
import './../css/Header.css';

/**
    Header for the site. Should display title and collapsable menu buttons.
*/
class Header extends Component {
  constructor(props) {
    super(props);

    this.returnToHomePage = this.returnToHomePage.bind(this);
    this.goToCountry = this.goToCountry.bind(this);
  }

  // returns back to the home page
  returnToHomePage(e) {
    e.preventDefault();
    console.log("Navbar brand clicked --> return home")
    this.props.dispatch(displayPage({display: "HOME_PAGE", imagePath: ""}));
  }

  // Goes to image caousel page for country x
  // CURRENTLY BUG IF ALREADY INSIDE OF AN IMAGE GALLERY 
  goToCountry(e) {
    e.preventDefault();
    console.log("Navbar country clicked --> go to " + e.currentTarget.id)
    this.props.dispatch(displayPage({display: "IMAGE_CAROUSEL", imagePath: e.currentTarget.id}));
  }


  render() {
    let locationList = this.props.directories[0]["sub-directories"].sort();
    const locations = locationList.map((loc) => 
      <NavDropdown.Item id={loc} onClick={this.goToCountry}>{loc}</NavDropdown.Item>);

    return (
      <header>
        <Navbar collapseOnSelect expand="md" variant="dark">
          <Navbar.Brand onClick={this.returnToHomePage}>Chase Dreszer's Travel Photos</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link href="#main-content">About</Nav.Link>
              <NavDropdown title="Locations" id="collasible-nav-dropdown">
                {locations}
              </NavDropdown>
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

export default connect()(Header);