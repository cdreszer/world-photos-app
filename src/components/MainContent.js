import React, { Component } from 'react';
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container';

import DirectoryContainer from "./DirectoryContainer.js";
import ImageBio from "./ImageBio.js";
import ImageGalleryCarousel from "./ImageGalleryCarousel.js";

import { displayPage } from '../actions'

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

    this.state = {
      display: "HOME_PAGE",
      imagePath: ""
    };

    this.homePage = this.homePage.bind(this);
    this.xsContactInfo = this.xsContactInfo.bind(this);
    this.imageGalleryCarouselPage = this.imageGalleryCarouselPage.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.renderContent = this.renderContent.bind(this);

  }

  /**
    Passes to child, should be a better way to do this...
    currently unused
  */
  updateContent(type, content) {
   //  switch (type) {
   //    case 'DISPLAY_PAGE':
   //      // Updates props
   //      this.props.displayPageDispatch(content);

   //      // SET STATE
   //      //this.setState({display: content.display, imagePath: content.imagePath});
   //      // this.setState({display: this.props.display, imagePath: this.props.imagePath});
   //      break;
   //    default:
   //      return ;
   // }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.display !== this.props.display) {
      this.setState({display: nextProps.display});
    }
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
        <DirectoryContainer displayPage={this.updateContent}/>
      </div>
    );
  }

  renderContent() {
    switch (this.state.display) {
      case 'HOME_PAGE':
         return this.homePage();
      default:
         return this.imageGalleryCarouselPage();
    }
  }

  render() {
    return (
      <Container id="main-content" >
         {this.renderContent()}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {display: state.displayPage.display, imagePath: state.displayPage.imagePath}
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayPageDispatch: (message) => {
      dispatch(displayPage(message))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);