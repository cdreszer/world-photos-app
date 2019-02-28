import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { withRouter } from 'react-router-dom';
import { LinkContainer} from 'react-router-bootstrap';

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
    this.scrollToContactInfo = this.scrollToContactInfo.bind(this);
  }

  handleToggler() {
    this.setState({isOpen: !this.state.isOpen});
  }

  handleBlur(e) {
    if (this.state.isOpen) {
      this.handleToggler();
    }
  }

  scrollToContactInfo(e) {
    if (document.getElementById('contact-info'))
      document.getElementById('contact-info').scrollIntoView({behavior: "smooth"}) ;
  }

  render() {
    let locationList = this.props.directories && this.props.directories.length > 0 
      ? this.props.directories[0]["sub-directories"].sort() : [];
    const locations = locationList.map((loc) => 
      <LinkContainer to={`/location/${loc}`}>
        <NavDropdown.Item key={loc} id={loc}>{loc}</NavDropdown.Item>
      </LinkContainer>);

    // add to Navbar: onBlur={this.handleBlur} .... however if click dropdown closes menu :(
    return (
      <header>
        <Navbar expanded={this.state.isOpen} expand="md" variant="dark">
          <LinkContainer to='/home'>
            <Navbar.Brand>Chase Dreszer's Travel Photos</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle onClick={this.handleToggler} aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <LinkContainer to='/about'>
                <Nav.Link >About</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Locations" id="collasible-nav-dropdown">
                {locations}
              </NavDropdown>
              <LinkContainer to='/parallax'>
                <Nav.Link>Parallax</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#">Postcards</Nav.Link>
              <LinkContainer to='/map'>
                <Nav.Link>Map</Nav.Link>
              </LinkContainer>
              <Nav.Link onClick={this.scrollToContactInfo}>Contact</Nav.Link>
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