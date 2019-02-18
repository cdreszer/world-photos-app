import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { LinkContainer} from 'react-router-bootstrap';

// import {displayPage} from '../actions'

import './../css/index.css';
import './../css/Header.css';

/**
    Header for the site. Should display title and collapsable menu buttons.
*/
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }

    this.handleToggler = this.handleToggler.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleToggler() {
    this.setState({isOpen: !this.state.isOpen});
  }

  handleBlur(e) {
    if (this.state.isOpen) {
      this.handleToggler();
    }
  }

  render() {
    let locationList = this.props.directories[0]["sub-directories"].sort();
    const locations = locationList.map((loc) => 
      <LinkContainer to={`/location/${loc}`}>
        <NavDropdown.Item key={loc} id={loc}>{loc}</NavDropdown.Item>
      </LinkContainer>);

    // add to Navbar: onBlur={this.handleBlur} .... however if click dropdown closes menu :(
    return (
      <header>
        <Navbar expanded={this.state.isOpen} expand="md" variant="dark">
          <Navbar.Brand>
            <Link to='/home'>Chase Dreszer's Travel Photos</Link>
          </Navbar.Brand>
          <Navbar.Toggle onClick={this.handleToggler} aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link href="#main-content">About</Nav.Link>
              <NavDropdown title="Locations" id="collasible-nav-dropdown">
                {locations}
              </NavDropdown>
              <LinkContainer to='/parallax'>
                <Nav.Link>Parallax</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#animals">Animals</Nav.Link>
              <Nav.Link href="#map">Map</Nav.Link>
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

const mapStateToProps = (state) => {
  return {directories: state.directories}
};

export default withRouter(connect(mapStateToProps)(Header));

// Purely redux routing.

//     this.returnToHomePage = this.returnToHomePage.bind(this);
//     this.goToCountry = this.goToCountry.bind(this);

//   // returns back to the home page
//   returnToHomePage(e) {
//     e.preventDefault();
//     console.log("Navbar brand clicked --> return home")
//     this.props.dispatch(displayPage({display: "HOME_PAGE", imagePath: ""}));
//   }

//   // goes to specified countries image page
//   // onClick={this.goToCountry}
//   goToCountry(e) {
//     e.preventDefault();

//     if (this.state.isOpen) {
//       this.handleToggler();
//     }
//     console.log("Navbar country clicked --> go to " + e.currentTarget.id)
//     this.props.dispatch(displayPage({display: "IMAGE_CAROUSEL", imagePath: e.currentTarget.id}));
//   }