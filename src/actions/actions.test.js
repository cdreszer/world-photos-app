import configureStore from 'redux-mock-store';

import {ADD_COMMENT, addComment, ADD_LAT_LONG, addLatLong} from ".";

const mockStore = configureStore();
const store = mockStore();

const comment1 = 
{
   "image": 
      {
         "name": "Bali",
         "image": "Bali.JPG"
      },
   "author": "CD",
   "comment": "these scooters were sicc"
};

const latlong1 = 
{
   name: "Bali",
   imagePath: "Bali.JPG",
   lat: -8.6478, 
   lng: 115.1385,
   path: []
};

/** TESTS ADD_COMMENT **/
describe("addComment", () => {
   beforeEach(() => { 
      store.clearActions();
   });

   it('Dispatches the correct action and payload', () => {
      const expectedActions = [
         {
            type: ADD_COMMENT,
            content: comment1,
         }
      ];

      store.dispatch(addComment(comment1));
      expect(store.getActions()).toEqual(expectedActions);
   });

   it('Dispatches multiple correct action and payload', () => {
      const expectedActions = [
         {
            type: ADD_COMMENT,
            content: comment1,
         },
         {
            type: ADD_COMMENT,
            content: comment1,
         },
         {
            type: ADD_COMMENT,
            content: comment1,
         },

      ];

      store.dispatch(addComment(comment1));
      store.dispatch(addComment(comment1));
      store.dispatch(addComment(comment1));
      expect(store.getActions()).toEqual(expectedActions);
   });

});

/** TESTS ADD_LAT_LONG **/
describe("addLatLong", () => {
   beforeEach(() => { 
      store.clearActions();
   });

   it('Dispatches the correct action and payload', () => {
      const expectedActions = [
         {
            type: ADD_LAT_LONG,
            content: latlong1,
         }
      ];

      store.dispatch(addLatLong(latlong1));
      expect(store.getActions()).toEqual(expectedActions);
   });
});

/** TESTS MULTIPLE ACTION TYPES **/
describe("Multiple action types", () => {
   beforeEach(() => { 
      store.clearActions();
   });

   it('Dispatches multiple correct action and payload in order', () => {
      const expectedActions = [
         {
            type: ADD_LAT_LONG,
            content: latlong1,
         },
         {
            type: ADD_COMMENT,
            content: comment1,
         },
         {
            type: ADD_COMMENT,
            content: comment1,
         },
         {
            type: ADD_LAT_LONG,
            content: latlong1,
         }
      ];

      store.dispatch(addLatLong(latlong1));
      store.dispatch(addComment(comment1));
      store.dispatch(addComment(comment1));
      store.dispatch(addLatLong(latlong1));
      expect(store.getActions()).toEqual(expectedActions);
   });
});
