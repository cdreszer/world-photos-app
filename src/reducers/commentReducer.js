import {ADD_COMMENT} from './../actions/index.js';

export const initialState = [];

// comment action.content: {imagePath, author, comment}
const comments = (state= initialState, action) => {
   switch (action.type) {
      case ADD_COMMENT:
         let comment = action.content;
         comment.id = state.length;
         return [...state, comment];
      default:
         return state;
   }
}

export default comments;