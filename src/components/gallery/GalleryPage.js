import React from 'react';

import { Redirect } from 'react-router-dom';

import ImageGalleryCarousel from './ImageGalleryCarousel.js';
import ReduxCommentForm from './CommentForm.js';
import CommentRenderer from './CommentRenderer.js';

/**
   Goes to the designated image gallery. If the gallery doesnt exists redirects home.

   Gallery consists of image gallery carousel, comment form and renderer.
*/
function GalleryPage(props) {
   var cover = props.directories[0].images.find(im => im.name === props.match.params.locName);

   if (cover) {
      return (
         <React.Fragment>
            <ImageGalleryCarousel title={props.match.params.locName} images={props.images}/>
            <ReduxCommentForm image={cover}/>
            <CommentRenderer image={cover}/>
         </React.Fragment>
      );
   }
   else {
      return <Redirect to='/home' />
   }
}

export default GalleryPage;