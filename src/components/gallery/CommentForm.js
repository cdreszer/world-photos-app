import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { addComment } from "./../../actions";

import './../../css/CommentForm.css'

function CommentForm(props){
   props.change("image", props.image);
   const { handleSubmit } = props;

   return (
      <form onSubmit={handleSubmit}>
         <span>Name:</span><br/>
         <Field id="authorField" name="author" component="input" type="text"/>
         <br/>
         <span>Comment:</span><br/>
         <Field id="commentField" name="comment" component="textarea" type="text"/>
         <br/>
         <button type="submit">Submit</button>
      </form>
   );
}

const ReduxCommentForm = reduxForm({
  form: 'commentForm', // required by reduxForm()
  warn: (values, props) => {}, 
  error: (values, props) => {} 
})(CommentForm);

const mapDispatchToProps = (dispatch) => ({
    onSubmit: comment => dispatch(addComment(comment))
});

export default connect(null, mapDispatchToProps)(ReduxCommentForm);