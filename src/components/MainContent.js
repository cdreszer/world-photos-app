import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import DirectoryContainer from "./DirectoryContainer.js";
import ImageBio from "./ImageBio.js";
import ImageGalleryCarousel from "./ImageGalleryCarousel.js";

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
  constructor(props) {
    super(props);

    this.homePage = this.homePage.bind(this);
    this.xsContactInfo = this.xsContactInfo.bind(this);
    this.imageGalleryCarouselPage = this.imageGalleryCarouselPage.bind(this);
  }

  /** 
    Shows phone number and email directly at top on mobile devices. 
    ** NEEDS TO BE STYLIZED
  */
  xsContactInfo(props) {
    return (
      <div>
        <div id="call-btn" class="text-center d-xs-block d-sm-none">
          <a class="btn" href="tel:858-395-6663">
          <span class="glyphicon glyphicon-earphone"></span>
          858-395-6663
          </a>
        </div>
        <div id="email" class="text-center d-xs-block d-sm-none">
          <span class="glyphicon glyphicon-envelope"></span>
          chasedreszer@gmail.com
        </div>
      </div>
    );
  }

  imageGalleryCarouselPage(props) {
    return <ImageGalleryCarousel/>;
  }

  homePage(props) {
    return (
      <div>
        <ImageBio id="bio" text="hello. my name is chase dreszer, 
        these are some of the pictures from my travels"/>
        <DirectoryContainer/>
      </div>
    );
  }

  render() {
    return (
      <Container id="main-content" >
         {this.homePage()}
      </Container>
    );
  }
}

export default MainContent;