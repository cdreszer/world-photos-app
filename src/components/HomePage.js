import React from 'react'

import DirectoryContainer from "./DirectoryContainer.js";
import ImageBio from "./ImageBio.js";

import './../css/index.css';
import './../css/MainContent.css';

function HomePage(props) {
   return (
      <React.Fragment>
        <ImageBio id="bio" text="hello. my name is chase dreszer, 
        these are some of the pictures from my travels"/>
        <DirectoryContainer directories={props.directories}/>
      </React.Fragment>
   );
}

export default HomePage;