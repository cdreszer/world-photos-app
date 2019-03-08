import React from 'react';
import { shallow } from 'enzyme';

import DirectoryContainer from "./DirectoryContainer.js";
import Directory from "./../shared/Directory.js"

// top level directory specifying 3 directories
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

   it('has the correct amount of directories', () => {
      const wrapper = shallow(<DirectoryContainer directories={directories}/>);

      expect(wrapper.find(Directory)).toHaveLength(3);
   });

   it('has no directories when not passed directory prop', () => {
      const wrapper = shallow(<DirectoryContainer />);

      expect(wrapper.find(Directory)).toHaveLength(0);
   });

   it('has no directories when passed empty array', () => {
      const wrapper = shallow(<DirectoryContainer directories={[]}/>);

      expect(wrapper.find(Directory)).toHaveLength(0);
   });
});