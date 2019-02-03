import React, { Component } from 'react';
import { connect } from 'react-redux'
import Image from 'react-bootstrap/Image';

import { displayPage } from '../actions'

import './../css/index.css';
import './../css/Directory.css';

/**
  Directory outwardly displays a clickable image to the user.
  Inside of directory can be content and subdirectories.
  
  For this project a directory is an image gallery for an individual
  country, which might have subdirectories for regions within the country.
  ex. Greece as the directory, Athens and Santorini as subdirectories with
  image galleries within each region.

*/
class Directory extends Component {
  constructor(props) {
    super(props);

    this.handleClick= this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log("directory clicked from " + this.props.name)
    // DISPATCH AN EVENT WITH SOME INFO
    this.props.dispatch(displayPage({display: "IMAGE_CAROUSEL", imagePath: this.props.image}));
    // this.props.displayPage("DISPLAY_PAGE", {display: "IMAGE_CAROUSEL", imagePath: this.props.image});
  }

  render() {
    const imageURI = require('./../images/' + this.props.image);
    return (
      <div className="col-md-4 col-sm-6 col-xs-12">
        <a onClick={this.handleClick}>
          <div className="directory-tile" id={this.props.name + "-tile"}>
            <Image className="Image" src={imageURI} alt={this.props.name} fluid/>
            <span>{this.props.name}</span>
          </div>
        </a>
      </div>
    );
  }
}

export default connect()(Directory);