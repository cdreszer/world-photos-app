import React, { Component } from 'react';
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import HomePage from "./HomePage.js"
import ImageGalleryCarousel from "./ImageGalleryCarousel.js";
import ParallaxPage from "./ParallaxPage.js";

import { displayPage } from '../actions'

import './../css/index.css';
import './../css/MainContent.css';

/** 
    Main content displayed to the user between header and footer.

    LOOK INTO REACT-ROUTER-DOM : probably what I should be using to redirect content.

      ^ use match.params.locName to find which images to use

      maybe use REACT-REDUX-FORM for some sort of user comments on locations

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

    this.homePage = this.homePage.bind(this);
    this.imageGalleryPage = this.imageGalleryPage.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.display !== this.props.display) {
  //     this.setState({display: nextProps.display, imagePath: nextProps.imagePath});
  //   }
  //   else if (nextProps.imagePath !== this.props.imagePath) {
  //     this.setState({imagePath: nextProps.imagePath});
  //   }
  // }

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
      </Container>
    );
  }

  // {this.renderContent()}
  render() {
    return (
      <Switch>
        <Route path="/home" component={this.homePage} />
        <Route path="/location/:locName" component={this.imageGalleryPage} />
        <Route path='/parallax' component={() => <ParallaxPage />} />
        <Redirect to="/home" />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {display: state.displayPage.display, imagePath: state.displayPage.imagePath, directories: state.directories}
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayPageDispatch: (message) => {
      dispatch(displayPage(message))
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContent));



// Old method of routing via redux dispatches

  // this.renderContent = this.renderContent.bind(this);

  // renderContent() {
  //   switch (this.state.display) {
  //     case 'IMAGE_CAROUSEL':
  //       return <ImageGalleryCarousel title={this.state.imagePath} images={this.getImagesFromPath(this.props.directories, this.state.imagePath)}/>;
  //     default:
  //        return <HomePage directories={this.props.directories}/>;
  //   }
  // }