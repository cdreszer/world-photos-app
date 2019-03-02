import { ADD_COMMENT } from './../actions/index.js';
import { COMMENTS } from "./comments.js"

export const initialState = COMMENTS;

// comment action.content: {dirId (imagePath), author, comment}
const comments = (state= initialState, action) => {
   switch (action.type) {
      case ADD_COMMENT:
         let comment = action.content;
         comment.id = state.length;
         comment.author = comment.author && comment.author.length ? comment.author : 'anonymous';
         return [...state, comment];
      default:
         return state;
   }
}

export default comments;