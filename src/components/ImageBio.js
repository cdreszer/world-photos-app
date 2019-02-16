import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

import meImage from './../images/BIO.jpg';

import './../css/index.css';
import './../css/ImageBio.css';

/** 
    Displays an image. On hover text appears on image and the image becomes opaque.
*/
function ImageBio(props) {
  return (
     <div className="jumbotron">
        <Image id="jumbotron-image" src={meImage} alt="Picture of me" fluid/>
        <p>{props.text}</p>
     </div> 
  );
}

export default ImageBio;
