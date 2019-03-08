import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'

import MainContent from "./MainContent.js";
import HomePage from "./home/HomePage.js";
import ImageBio from "./home/ImageBio.js";
import GalleryPage from "./gallery/GalleryPage.js";
import ParallaxPage from "./parallax/ParallaxPage.js";
import TravelMap from "./map/TravelMap.js";
import PostcardPage from './postcards/PostcardPage.js';

const mockStore = configureStore();
global.scrollTo = jest.fn();

// top directory, 3 subdirectories: Bali, Barcelona, Paris. 
// 1 comment: Bali
// 1 lat long: Bali
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
  ],
  directories: [
    {
     "directory": "",
     "sub-directories": ['Barcelona', 'Paris', 'Bali'],
     "files": "['Bali.JPG', 'Barcelona.JPG', 'Paris.JPG']",
     "images": [
        {
           "name": "Bali",
           "image": "Bali.JPG",
        },
        {
           "name": "Barcelona",
           "image": "Barcelona.JPG",
        },
        {
           "name": "Paris",
           "image": "Paris.JPG",
        }
     ]},
     {
     "directory": "Barcelona",
     "sub-directories": [],
     "files": "['P1010263.JPG', 'P1010348.JPG']",
     "images": [
        {
           "name": "P1010263",
           "image": "Barcelona/P1010263.JPG",
        },
        {
           "name": "P1010348",
           "image": "Barcelona/P1010348.JPG",
        }
     ]},
     {
     "directory": "Paris",
     "sub-directories": [],
     "files": "['P1000675.JPG', 'P1000676.JPG']",
     "images": [
        {
           "name": "P1000675",
           "image": "Paris/P1000675.JPG",
        },
        {
           "name": "P1000676",
           "image": "Paris/P1000676.JPG",
        }
     ]},
     {
     "directory": "Bali",
     "sub-directories": [],
     "files": "['P1000259.JPG', 'P1010610.JPG', 'P1010575.JPG']",
     "images": [
        {
           "name": "P1000259",
           "image": "Bali/P1000259.JPG",
        },
        {
           "name": "P1010610",
           "image": "Bali/P1010610.JPG",
        },
        {
           "name": "P1010575",
           "image": "Bali/P1010575.JPG",
        }
     ]}
  ],
  latlongs: [
    {
     name: "Bali",
     imagePath: "Bali.JPG",
     lat: -8.6478, 
     lng: 115.1385,
     path: []
    }
  ]
};

const store = mockStore(initialState);

var initWrapper = (path) => {
  return mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={[ path ]}>
        <MainContent />
      </MemoryRouter>
    </Provider>
  );
};

describe('Main Content', () => {
  describe('Routing', () => {

    it('Reroutes to home on bad route', () => {
      const wrapper = initWrapper('/badroute');

      expect(wrapper.find(HomePage)).toHaveLength(1);
      expect(wrapper.find(ParallaxPage)).toHaveLength(0);
    });

    it('Routes to about', () => {
      const wrapper = initWrapper('/about');

      expect(wrapper.find(HomePage)).toHaveLength(0);
      expect(wrapper.find(ImageBio)).toHaveLength(1);
    });

    it('Routes to paralllax', () => {
      const wrapper = initWrapper('/parallax');

      expect(wrapper.find(HomePage)).toHaveLength(0);
      expect(wrapper.find(ParallaxPage)).toHaveLength(1);
    });

    it('Routes to postcards', () => {
      const wrapper = initWrapper('/postcards');

      expect(wrapper.find(PostcardPage)).toHaveLength(1);
      expect(wrapper.find(HomePage)).toHaveLength(0);
      expect(wrapper.find(ParallaxPage)).toHaveLength(0);
    });

    it('Routes to map', () => {
      const wrapper = initWrapper('/map');

      expect(wrapper.find(TravelMap)).toHaveLength(1);
      expect(wrapper.find(HomePage)).toHaveLength(0);
      expect(wrapper.find(PostcardPage)).toHaveLength(0);
    });

    it('Routes to gallery page (location/:loc)', () => {
      const wrapper = initWrapper('/location/Bali');

      expect(wrapper.find(TravelMap)).toHaveLength(0);
      expect(wrapper.find(HomePage)).toHaveLength(0);
      expect(wrapper.find(PostcardPage)).toHaveLength(0);
      expect(wrapper.find(GalleryPage)).toHaveLength(1);
    });

    it('Reroutes to home on bad location route (testing GalleryPage logic)', () => {
      const wrapper = initWrapper('/location/badroute');

      expect(wrapper.find(TravelMap)).toHaveLength(0);
      expect(wrapper.find(HomePage)).toHaveLength(1);
      expect(wrapper.find(PostcardPage)).toHaveLength(0);
      expect(wrapper.find(GalleryPage)).toHaveLength(0);
    });

    it('Directory routes to gallery page on click (testing Directory logic)', () => {
      const wrapper = initWrapper('/home');

      expect(wrapper.find(GalleryPage)).toHaveLength(0);
      expect(wrapper.find(HomePage)).toHaveLength(1);

      // each directory has id (loc)-tile
      wrapper.find("#Bali-tile").simulate('click', { button: 0 });

      expect(wrapper.find(GalleryPage)).toHaveLength(1);
      expect(wrapper.find(HomePage)).toHaveLength(0);
    });

    // it('Map album marker routes to gallery page on click (testing PhotoAlbumMarker logic)', () => {
    //   const wrapper = initWrapper('/map');

    //   expect(wrapper.find(GalleryPage)).toHaveLength(0);
    //   expect(wrapper.find(TravelMap)).toHaveLength(1);

    //   // each directory has id (loc)-tile
    //   wrapper.find("#Bali-tile").simulate('click', { button: 0 });

    //   expect(wrapper.find(GalleryPage)).toHaveLength(1);
    //   expect(wrapper.find(TravelMap)).toHaveLength(0);
    // });
    
  });
});
