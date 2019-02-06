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
      - travel map that is clickable that reroutes to page (maybe add editable lon,lat on image gallery page)
      - image title, desc, file name, country, region, etc. in JSON objects (maybe mongoDB)
      - different types of views for images, carousel, magazine style, slides, etc.
      - allow for editing image descriptions and titles (preserve it)
      - maybe add a cart feature and gallery size chooser etc.
*/
class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "HOME_PAGE",
      imagePath: "",
      directories: this.props.directories
    };

    this.homePage = this.homePage.bind(this);
    this.xsContactInfo = this.xsContactInfo.bind(this);
    this.imageGalleryCarouselPage = this.imageGalleryCarouselPage.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.renderContent = this.renderContent.bind(this);

  }

  /**
    Passes to child, and then sets state.
    Should be a better way to do this...
    CURRENTLY UNUSED
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
      this.setState({display: nextProps.display, imagePath: nextProps.imagePath});
    }
    else if (nextProps.imagePath !== this.props.imagePath) {
      this.setState({imagePath: nextProps.imagePath});
    }
  }

  componentDidUpdate() {
    // On main content update moves scroll to top of the page.
    window.scrollTo(0, 0);
  }

  /** 
    Given an array of directories and an image path, returns
    an array of images within the directory.
  */
  getImagesFromPath(directories, imgPath) {
    const path = './../images/' + imgPath;
    var directory = directories.find((dir) => dir.directory === path);

    return directory.images;
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
    return <ImageGalleryCarousel title={this.state.imagePath} images={this.getImagesFromPath(this.state.directories, this.state.imagePath)}/>;
  }

  homePage(props) {
    return (
      <div>
        <ImageBio id="bio" text="hello. my name is chase dreszer, 
        these are some of the pictures from my travels"/>
        <DirectoryContainer directories={this.state.directories}/>
      </div>
    );
  }

  renderContent() {
    switch (this.state.display) {
      case 'IMAGE_CAROUSEL':
        return this.imageGalleryCarouselPage();
      default:
         return this.homePage();
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

// Copenhagen Video AutoPlay
    // const vid = require('./../video/CopenhagenPigeons.MP4')
    //     <video autoPlay loop muted>
    //       <source src={vid} type="video/mp4"/>
    //     </video>