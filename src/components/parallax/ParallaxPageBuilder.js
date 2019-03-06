import React from 'react';

import './../../css/index.css';
import './../../css/ParallaxPage.css';


/**
    Returns an in-line style object setting the background image 
    to the image for the passed image path if defined.
*/
function getBackgroundStyle(imagePath) {
  var imageURI = "";

  if (imagePath) {
    imageURI = require(`./../../images/${imagePath}`)
  }

  // random height from 250 - 650
  var height = 250 + (Math.random() * 400) + "px";

  return topImageURI.length ? { 
    backgroundImage: `url(${imageURI})`,
    height: height,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  } : {};
}

/**
   Parallax page to show off some waves.

   Accepts props: images array, descriptions array
*/
function ParallaxPage(props) {
  // For each image passed in looks in props.descriptions for description.
  const layout = props.images.map((image,index) =>(
      <React.Fragment key={index}>
        <div style={getBackgroundStyle(image.image)} />
        <div className="parallax-caption">
           {props.descriptions && props.descriptions[index] ? props.descriptions[index] : <p>Missing description.</p>}
        </div>
      </React.Fragment>));

  return (
     <React.Fragment>
      {layout}
     </React.Fragment>
  );
}

export default ParallaxPage;

