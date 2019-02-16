import React, { Component } from 'react';
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container';

import HomePage from "./HomePage.js"
import ImageGalleryCarousel from "./ImageGalleryCarousel.js";
import ParallaxPage from "./ParallaxPage.js";

import { displayPage } from '../actions'

import './../css/index.css';
import './../css/MainContent.css';

/** 
    Main content displayed to the user between header and footer.

    LOOK INTO REACT-ROUTER-DOM : probably what I should be using to redirect content.
      <Switch>
        <Route path="/home" component={() => <HomePage directories={this.state.directories}/>}>
        <Route path="/location/:locName" component={({match}) => <ImageGalleryCarousel title={this.state.imagePath} images={this.getImagesFromPath(this.state.directories, this.state.imagePath)}/>}>
        <Redirect to="/home">
      </Switch>

      ^ use match.params.locName to find which images to use

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
      directories: this.props.directories,
    };

    // this.updateContent = this.updateContent.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  componentWillReceiveProps(nextProps) {
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

  renderContent() {
    switch (this.state.display) {
      case 'IMAGE_CAROUSEL':
        return <ImageGalleryCarousel title={this.state.imagePath} images={this.getImagesFromPath(this.state.directories, this.state.imagePath)}/>;
      default:
         return <HomePage directories={this.state.directories}/>;
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
  return {display: state.displayPage.display, imagePath: state.displayPage.imagePath, directories: state.displayPage.directories}
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayPageDispatch: (message) => {
      dispatch(displayPage(message))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
// USE withRouter(connect...)

  /**
    Passes to child, and then sets state.
    Should be a better way to do this...
    CURRENTLY UNUSED
  */
  // updateContent(type, content) {
  //   switch (type) {
  //     case 'DISPLAY_PAGE':
  //       // Updates props
  //       this.props.displayPageDispatch(content);

  //       // SET STATE
  //       //this.setState({display: content.display, imagePath: content.imagePath});
  //       // this.setState({display: this.props.display, imagePath: this.props.imagePath});
  //       break;
  //     default:
  //       return ;
  //  }
  // }