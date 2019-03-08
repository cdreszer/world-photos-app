import comments, {initialState}  from './commentReducer.js';
import { ADD_COMMENT, addComment} from './../actions';

const testComment = 
{
   "image": 
      {
         "name": "Bali",
         "image": "Bali.JPG"
      },
   "author": "CD",
   "comment": "these scooters were sicc"
};

describe("commentReducer", () => {
  it('Initial state is correct', () => {
    const action = { type: 'dummy' };

    expect(comments(undefined, action)).toEqual(initialState);
  });

   it('Returns the new correct state when passing action', () => {
      const action = { type: ADD_COMMENT, content: testComment };
      testComment.id = initialState.length;
      const expectedState = [...initialState, testComment];

      expect(comments(undefined, action)).toEqual(expectedState);
   });
});