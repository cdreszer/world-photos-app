import React from 'react';
import { shallow } from 'enzyme';

import HomePage from "./HomePage.js"
import DirectoryContainer from "./DirectoryContainer.js";
import ImageBio from "./ImageBio.js"

const directories = [
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
      ]
   }
];

describe('DirectoryContainer', () => {

   it('has correct children components when passed a top directory', () => {
      const wrapper = shallow(<HomePage directories={directories}/>);

      expect(wrapper.find(DirectoryContainer)).toHaveLength(1);
      expect(wrapper.find(ImageBio)).toHaveLength(1);
   });

   it('has correct children components when passed no directories prop', () => {
      const wrapper = shallow(<HomePage />);

      expect(wrapper.find(DirectoryContainer)).toHaveLength(1);
      expect(wrapper.find(ImageBio)).toHaveLength(1);
   });
});