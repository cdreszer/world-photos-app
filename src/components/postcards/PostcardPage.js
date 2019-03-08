import React from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';

import Postcard from "./Postcard.js";

import './../../css/index.css';
// import './../css/PostcardPage.css';

/**
  Directory container contains all the clickable directories
  displayed in rows.
*/
function PostcardPage(props) {

  const postcards = props.comments.map((comment, index) => 
    <div key={comment.id} className="col-md-6 col-sm-12 ">
      <Postcard key={comment.id} comment={comment}/>
    </div>);

  return (
    <Row id="postcard-container" className="PostcardContainerContainer row">
      {postcards}
    </Row>
  );
}

const mapStateToProps = (state) => {
  return {comments: state.comments};
};

export default connect(mapStateToProps)(PostcardPage);