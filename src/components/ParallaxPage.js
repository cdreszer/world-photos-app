import React from 'react';

import './../css/index.css';
import './../css/ParallaxPage.css';


/**
   Parallax page to show off some waves.
*/
function ParallaxPage(props) {
  return (
     <React.Fragment>
        <div className="peniche" />
        <div className="parallax-caption">
           <p> Make no mistake: Supertubes is one of the best waves in Europe.<br/> There’s one main peak with a super-fast (though makable) left, and a somewhat shorter right, and one other peak down the beach that’s not quite as perfect but still way better than your average day at Huntington Pier. 
           </p> 
        </div>
        <div className="espinho"/>
        <div className="parallax-caption">
           <p> The best known surf spot in north Portugal breaks off a jetty and runs through to the inside as a fast, walled up right that finally dies as a close out over shallow rocks. Plenty of tubing moments with swells of up to 3m+ (10ft).</p> 
        </div>
        <div className="changing"/>
     </React.Fragment>
  );
}

export default ParallaxPage;

// Copenhagen Video AutoPlay
    // const vid = require('./../video/CopenhagenPigeons.MP4')
    //     <video autoPlay loop muted>
    //       <source src={vid} type="video/mp4"/>
    //     </video>
