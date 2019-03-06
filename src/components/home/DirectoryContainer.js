import React from 'react'
import Row from 'react-bootstrap/Row';

import Directory from "./../shared/Directory.js"

import './../../css/index.css';
import './../../css/DirectoryContainer.css';

/**
  Directory container contains all the clickable directories
  displayed in rows.
*/
function DirectoryContainer(props) {
  const topLevelDirectories = props.directories[0].images;
  const directories = topLevelDirectories.map((dir, index) => 
    <div className="col-md-4 col-sm-6 col-xs-12">
      <Directory key={dir.name} name={dir.name} image={dir.image}/>
    </div>);

  return (
    <Row id="home-directory" className="DirectoryContainer row">
      {directories}
    </Row>
  );
}

export default DirectoryContainer;