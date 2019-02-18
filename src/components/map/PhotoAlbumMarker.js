import React from 'react';
import Image from 'react-bootstrap/Image';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';

import './../../css/index.css'
import './../../css/map/PhotoAlbumMarker.css'

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