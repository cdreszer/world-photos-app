import React from 'react';
import { shallow } from 'enzyme';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

import Directory from "./Directory.js"

const image = 
   {
     "name": "Bali",
     "image": "Bali.JPG",
   };

describe('Directory', () => {
   // 'Routes to gallery page on click' tested in MainContent
   it('has all the necessary components', () => {
      const wrapper = shallow(<Directory name={image.name} image={image.image}/>);

      expect(wrapper.find(Link)).toHaveLength(1);
      expect(wrapper.find(Image)).toHaveLength(1);
      expect(wrapper.find('span')).toHaveLength(1);
   });

   it('has correct id set', () => {
      const wrapper = shallow(<Directory name={image.name} image={image.image}/>);

      expect(wrapper.find("#Bali-tile")).toHaveLength(1);
   });

   it('has correct label', () => {
      const wrapper = shallow(<Directory name={image.name} image={image.image}/>);

      expect(wrapper.find('span').text()).toEqual('Bali');
   });
});