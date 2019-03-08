import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'

import CommentForm from "./CommentForm.js";

const initialState = {
  comments: [
    {
      "id": 0,
       "image": 
        {
           "name": "Bali",
           "image": "Bali.JPG"
        },
     "author": "CD",
     "comment": "these scooters were sicc"
    }
  ]
};

const image = 
   {
     "name": "Bali",
     "image": "Bali.JPG",
   };

const mockStore = configureStore();
const store = mockStore(initialState);

var initWrapper = (image) => {
   return mount(
      <Provider store={store}>
         <CommentForm image={image} />
      </Provider>
   );
};

describe('CommentForm', () => {
   beforeEach(() => { 
      store.clearActions();
   });

   it('renders a form', () => {
      const wrapper = initWrapper(image);

      expect(wrapper.find('form')).toHaveLength(1);
   });

   // TEST store and actions being created for ADD_COMMENT
   //  expect(store.getActions()).toEqual(expectedActions);
});

