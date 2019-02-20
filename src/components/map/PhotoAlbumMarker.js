import React from 'react';
import Image from 'react-bootstrap/Image';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';

import './../../css/index.css'
import './../../css/map/PhotoAlbumMarker.css'

/* 
   Essentially copy of Directory.... could probably refactor to remove this function and instead use directory.

   Could add an array of travel paths to and from location.
   use onmouseover to set each element in props.paths to visible... setVisible(true)
      .... onmouseover={e => props.paths.forEach(path => path.setVisible(true))}
*/
function PhotoAlbumMarker(props) { 
  const imageURI = require('./../../images/' + props.image);
  return (
    <Link to={`/location/${props.name}`} > 
      <div className="directory-tile marker-container" id={props.name + "-marker"}>
        <Image className="Image" src={imageURI} alt={props.name} fluid/>
        <span>{props.name}</span>
      </div>
    </Link>
  );
}
 
export default withRouter(connect()(PhotoAlbumMarker));