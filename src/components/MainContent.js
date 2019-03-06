import React, { Component } from 'react';
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import HomePage from "./HomePage.js"
import ImageGalleryCarousel from "./ImageGalleryCarousel.js";
import ParallaxPage from "./ParallaxPage.js";
import ImageBio from "./ImageBio.js";
import TravelMap from "./map/TravelMap.js";
import ReduxCommentForm from './CommentForm.js'
import CommentRenderer from './CommentRenderer.js'
import PostcardPage from './PostcardPage.js'

import './../css/index.css';
import './../css/MainContent.css';

/** 
    Main content displayed to the user between header and footer.

    comments / latlongs / travel paths / (maybe direstory json) should be saved in DB,
    images wont be since they take up a lot of space.

    IDEAS: 
      - travel map that is clickable that reroutes to page (maybe add editable lon,lat on image gallery page)
        - hover over image on map has plane path pop up (dont know how difficult?)
        - maybe scroll behind the map
      - image title, desc, file name, country, region, etc. in JSON objects (maybe mongoDB)
        - might need to use thunk for loading and logging
      - different types of views for images, carousel, magazine style, slides, etc.
      - allow for editing image descriptions and titles (preserve it)
      - maybe add a cart feature and gallery size chooser etc.
      - maybe use REDUX-FORM for some sort of user comments on locations
        - comment could be a little postcard that you can flip over (ReactCardFlip) to see photo
      - add in react animations / transitions (react-transition-group, react-animation-components)
*/
class MainContent extends Component {
  constructor(props) {
    super(props);

    this.homePage = this.homePage.bind(this);
    this.imageGalleryPage = this.imageGalleryPage.bind(this);
    this.aboutPage = this.aboutPage.bind(this);
    this.postcardPage = this.postcardPage.bind(this);
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

    return directory ? directory.images : [];
  }

  homePage() {
    return (
      <Container id="main-content" >
        <HomePage directories={this.props.directories}/>
      </Container>
    );
  };

  imageGalleryPage({match}) {
    return (
      <Container id="main-content" >
        <ImageGalleryCarousel title={match.params.locName} images={this.getImagesFromPath(this.props.directories, match.params.locName)}/>
        <ReduxCommentForm imagePath={match.params.locName}/>
        <CommentRenderer imagePath={match.params.locName}/>
      </Container>
    );
  }

  aboutPage() {
    return (
      <Container id="main-content" >
        <ImageBio id="bio" text="hello. my name is chase dreszer, these are some of the pictures from my travels"/>
      </Container>
    );
  }

  postcardPage() {
    return (
      <Container id="main-content" >
        <PostcardPage />
      </Container>
    );
  }

  render() {
    return (
      <Switch>
        <Route path="/home" component={this.homePage} />
        <Route path="/about" component={this.aboutPage}/>
        <Route path="/location/:locName" component={this.imageGalleryPage} />
        <Route path="/parallax" component={() => <ParallaxPage />} />
        <Route path="/postcards" component={this.postcardPage} />
        <Route path="/map" component={() => <TravelMap />} />
        <Redirect to="/home" />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return { directories: state.directories }
};

export default withRouter(connect(mapStateToProps)(MainContent));