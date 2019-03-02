import React from 'react';
import { connect } from 'react-redux';

import './../css/CommentRenderer.css'

function CommentRenderer(props) {
   const filteredComments = props.comments.filter(comment => comment.imagePath === props.imagePath);

   const comments = filteredComments.map(comment => 
      <li key={comment.id}>
         <div className="indivCommentContainer" >
            <span className="commentName">{comment.author}</span><br/>
            <p className="commentText">{comment.comment}</p>
         </div>
      </li>
   );

   return (
      <div className="commentContainer">
         <ul>
            {comments}
         </ul>
      </div>
   );
}

const mapStateToProps = (state) => {
  return {comments: state.comments};
};

export default connect(mapStateToProps)(CommentRenderer);