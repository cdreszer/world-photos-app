import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

import { Link } from 'react-router-dom';
import { requireWithBackup } from './../../util';

import './../../css/index.css';
import './../../css/Directory.css';

/**
  Directory outwardly displays a clickable image to the user.
  Inside of directory can be content and subdirectories.
  
  For this project a directory is an image gallery for an individual
  country/location, which might have subdirectories for regions within the country.
  ex. Greece as the directory, Athens and Santorini as subdirectories with
  image galleries within each region.

*/
class Directory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imageURI = requireWithBackup(this.props.image);
    
    return (
      <Link to={`/location/${this.props.name}`} > 
        <div className="directory-tile" id={this.props.name + "-tile"}>
          <Image className="Image" src={imageURI} alt={this.props.name} fluid/>
          <span>{this.props.name}</span>
        </div>
      </Link>
    );
  }
}

export default Directory;

// Dispatch redux action upon click. **MIGHT WANT TO STILL USE AND THEN DO this.props.history.push("{`/location/${this.props.name}`}")

  // this.handleClick= this.handleClick.bind(this);

  // // onClick={this.handleClick}>
  // handleClick(e) {
  //   e.preventDefault();
  //   console.log("directory clicked from " + this.props.name)

  //   // DISPATCH AN EVENT WITH SOME INFO
  //   this.props.dispatch(displayPage({display: "IMAGE_CAROUSEL", imagePath: this.props.name}));

  //   // USES PASSED THROUGH METHOD
  //   // this.props.displayPage("DISPLAY_PAGE", {display: "IMAGE_CAROUSEL", imagePath: this.props.image});
  // }