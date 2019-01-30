import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import DirectoryContainer from "./DirectoryContainer.js";
import ImageBio from "./ImageBio.js";

import './../css/index.css';
import './../css/MainContent.css';

/** 
    Main content displayed to the user between header and footer.

    IDEAS: 
      - travel map that is clickable that reroutes to page
      - image title, desc, file name, country, region, etc. in JSON objects (maybe mongoDB)
      - different types of views for images, carousel, magazine style, slides, etc.
*/
class MainContent extends Component {
  render() {
    return (
      <Container id="main-content" >
         <ImageBio id="bio" text="hello. my name is chase dreszer, 
         these are some of the pictures from my travels"/>
         <DirectoryContainer/>
      </Container>
    );
  }
}

export default MainContent;
