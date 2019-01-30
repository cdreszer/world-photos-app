import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';

import Directory from "./Directory.js"
import athensImage from './../images/athens.JPG';
import sanImage from './../images/santorini-water.JPG';
import penicheImage from './../images/peniche.JPG';

import './../css/index.css';
import './../css/DirectoryContainer.css';

/**
  Directory container contains all the clickable directories
  displayed in rows.
*/
class DirectoryContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row className="DirectoryContainer row">
        <Directory name="Santorini" image={sanImage}/>
        <Directory name="Athens" image={athensImage}/>
        <Directory name="Peniche" image={penicheImage}/>
      </Row>
    );
  }
}

export default DirectoryContainer;