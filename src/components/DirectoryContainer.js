import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';

import Directory from "./Directory.js"

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
      directory: '',
      directories: [
        {
          "name": "Bali Scooter",
          "image": "Bali Scooter.JPG",
        },
        {
          "name": "Paris",
          "image": "Paris.JPG",
        },
        {
          "name": "P1010115",
          "image": "P1010115.JPG",
        },
        {
          "name": "santorini-water",
          "image": "santorini-water.JPG",
        },
        {
          "name": "P1010071",
          "image": "P1010071.JPG",
        },
        {
          "name": "P1010138",
          "image": "P1010138.JPG",
        },
        {
          "name": "athens",
          "image": "athens.JPG",
        },
        {
          "name": "P1010072",
          "image": "P1010072.JPG",
        },
        {
          "name": "P1010107",
          "image": "P1010107.JPG",
        },
        {
          "name": "P1010152",
          "image": "P1010152.JPG",
        },
        {
          "name": "SanSebastian",
          "image": "SanSebastian.JPG",
        },
        {
          "name": "P1010120",
          "image": "P1010120.JPG",
        },
        {
          "name": "P1010086",
          "image": "P1010086.JPG",
        },
        {
          "name": "peniche",
          "image": "peniche.JPG",
        }
        ]
    }
  }

  render() {
    const directories = this.state.directories.map((dir, index) => 
      <Directory displayPage={this.props.displayPage} key={index} name={dir.name} directory={this.state.directory} image={dir.image}/>);
    return (
      <Row id="home-directory" className="DirectoryContainer row">
        {directories}
      </Row>
    );
  }
}

export default DirectoryContainer;