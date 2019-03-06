import React from 'react';

import './../../css/index.css';
import './../../css/ParallaxPage.css';


/**
    Returns an in-line style object setting the background image 
    to the image for the passed image path if defined.
*/
function getBackgroundStyle(imagePath) {
  var topImageURI = "";

  if (imagePath) {
    topImageURI = require(`./../../images/${imagePath}`)
  }

  return topImageURI.length ? { backgroundImage: `url(${topImageURI})`} : {};
}

/**
   Parallax page to show off some waves.

   Accepts props for three images (top/middle/bottom) and two descriptions...
   descriptions need to be in JSX format.
*/
function ParallaxPage(props) {
  //in-line style to add background image... could be used if want to randomize the photos.
  const topImageStyle = getBackgroundStyle(props.topImage);
  const middleImageStyle = getBackgroundStyle(props.middleImage);
  const bottomImageStyle = getBackgroundStyle(props.bottomImage);

  const desc1 = props.desc1 ? props.desc1 : 
    (<p> Make no mistake: Supertubes is one of the best waves in Europe.<br/> 
      There’s one main peak with a super-fast (though makable) left, and a somewhat shorter right, 
      and one other peak down the beach that’s not quite as perfect but still way better than your 
      average day at Huntington Pier. </p>);
    
  const desc2 = props.desc2 ? props.desc2 : 
    (<p> The best known surf spot in north Portugal breaks off a jetty and runs 
      through to the inside as a fast, walled up right that finally dies as a close out over 
      shallow rocks. Plenty of tubing moments with swells of up to 3m+ (10ft).</p> );

  return (
     <React.Fragment>
        <div style={topImageStyle} className="top-image" />
        <div className="parallax-caption">
           {desc1}
        </div>
        <div style={middleImageStyle} className="middle-image"/>
        <div className="parallax-caption">
           {desc2}
        </div>
        <div style={bottomImageStyle} className="bottom-image"/>
     </React.Fragment>
  );
}

export default ParallaxPage;

// Copenhagen Video AutoPlay
    // const vid = require('./../video/CopenhagenPigeons.MP4')
    //     <video autoPlay loop muted>
    //       <source src={vid} type="video/mp4"/>
    //     </video>
