import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

import meImage from './../images/me-in-cop.jpg';

import './../css/index.css';
import './../css/ImageBio.css';

/** 
    Displays an image. On hover text appears on image and the image becomes opaque.
*/
class ImageBio extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
       <div className="jumbotron">
          <Image id="jumbotron-image" src={meImage} alt="Picture of me" fluid/>
          <p>{this.props.text}</p>
       </div> 
    );
  }
}

export default ImageBio;
