import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';

import Directory from "./Directory.js"

import './../css/index.css';
import './../css/DirectoryContainer.css';

/**
  Directory container contains all the clickable directories
  displayed in rows.
*/
function DirectoryContainer(props) {
  const topLevelDirectories = props.directories[0].images;
  const directories = topLevelDirectories.map((dir, index) => 
    <Directory key={dir.name} name={dir.name} image={dir.image}/>);

  return (
    <Row id="home-directory" className="DirectoryContainer row">
      {directories}
    </Row>
  );
}

export default DirectoryContainer;