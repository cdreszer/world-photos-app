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
      directories: [...this.props.directories]
    }
  }

  render() {
    const topLevelDirectories = this.state.directories[0].images;
    const directories = topLevelDirectories.map((dir, index) => 
      <Directory displayPage={this.props.displayPage} key={index} name={dir.name} directory={this.state.directory} image={dir.image}/>);
    return (
      <Row id="home-directory" className="DirectoryContainer row">
        {directories}
      </Row>
    );
  }
}

export default DirectoryContainer;