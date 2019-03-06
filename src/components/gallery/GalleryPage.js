import React from 'react';

import ImageGalleryCarousel from './ImageGalleryCarousel.js';
import ReduxCommentForm from './CommentForm.js';
import CommentRenderer from './CommentRenderer.js';

function GalleryPage(props) {
   var cover = props.directories[0].images.find(im => im.name === props.match.params.locName);

   return (
      <React.Fragment>
         <ImageGalleryCarousel title={props.match.params.locName} images={props.images}/>
         <ReduxCommentForm image={cover}/>
         <CommentRenderer image={cover}/>
      </React.Fragment>
   );
}

export default GalleryPage;