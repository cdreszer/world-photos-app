import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';

import Directory from "./Directory.js"

// import athensImage from './../images/athens.JPG';
// import sanImage from './../images/santorini-water.JPG';
// import penicheImage from './../images/peniche.JPG';
// import meImage from './../images/me-in-cop.jpg';

import './../css/index.css';
import './../css/DirectoryContainer.css';

/**
  Directory container contains all the clickable directories
  displayed in rows.
*/
class DirectoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directories: [
        {
          name: "Santorini",
          image: 'santorini-water.JPG'//sanImage
        },
        {
          name: "Athens",
          image: 'athens.JPG'//athensImage
        },
        {
          name: "Peniche",
          image: 'peniche.JPG'//penicheImage
        },
        {
          name: "Copenhagen",
          image: 'me-in-cop.jpg'
        }
        ]
    }
  }

  render() {
    const directories = this.state.directories.map(dir => <Directory name={dir.name} image={dir.image}/>);
    return (
      <Row className="DirectoryContainer row">
        {directories}
      </Row>
    );
  }
}

export default DirectoryContainer;