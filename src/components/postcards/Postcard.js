import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

import { requireWithBackup } from './../../util';

import './../../css/Postcard.css'

function FrontPostCard(props) {
   const imageURI = requireWithBackup(props.comment.image.image);

   return (
      <div className="image-side card-face">
         <Image className="Image" src={imageURI} alt={props.comment.image.name} fluid/>
         <p className="postcard-greeting">Greetings from <br/><span className="greeting-location">{props.comment.image.name}</span></p><br/>
         <p className="postcard-greeting greeting-shadow">Greetings from <br/><span className="greeting-location greeting-shadow">{props.comment.image.name}</span></p><br/>
      </div>
   );
}

function BackPostCard(props) {
   const backURI = process.env.PUBLIC_URL + '/postcard-back.JPG';

   return (
      <div className="comment-side card-face">
         <Image className="Image" src={backURI} alt={"postcard comment"} fluid/>
         <Container className="indivCommentContainer" >
            <Row>
               <div className="left-side col-xs-6">
                  <p className="commentText ">{props.comment.comment}</p>
               </div>
               <div className="right-side col-xs-6">
                  <span className="commentName"> - {props.comment.author}</span><br/>
                  <span className="commentLocation">Sent from {props.comment.image.name}</span><br/>
               </div>
            </Row>
         </Container>
      </div>
   );
}

class Postcard extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isFlipped: false
      }

      this.handleClick = this.handleClick.bind(this);
   }

   handleClick(e) {
      e.preventDefault();
      this.setState({
         isFlipped: !this.state.isFlipped
      });
   }

   render() {

      return (
         <React.Fragment>
            <div className="postcard">
               <ReactCardFlip isFlipped={this.state.isFlipped}>
                  <FrontPostCard key="front" comment={this.props.comment}/>
                  <BackPostCard key="back" comment={this.props.comment} />
               </ReactCardFlip>
               <button onClick={this.handleClick}><i class="fa fa-rotate-right"></i></button>
            </div>
         </React.Fragment>
      );
   }

}

export default Postcard;