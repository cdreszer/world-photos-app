import React from 'react';

import Directory from './../Directory.js'

import './../../css/index.css'
import './../../css/map/PhotoAlbumMarker.css'

/* 
   Directory with additional styling in order to be placed on travel map.

   Could add an array of travel paths to and from location. (currently all paths are always showing)
   use onmouseover to set each element in props.paths to visible... setVisible(true)
      .... onmouseover={e => props.paths.forEach(path => path.setVisible(true))}
*/
function PhotoAlbumMarker(props) { 
  return (
    <div className="marker-container">
      <Directory  name={props.name} image={props.image}/>
    </div>
  );
}
 
export default PhotoAlbumMarker;
