//index.test.js
import { requireWithBackup, getImagesFromPath} from '.'
import { directories as DIRECTORIES } from './../reducers/directories.js'

/** Top level directory and three sub-directories: Bali, Barcelona, Paris */
const testDirectories = [
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
];

describe('getImagesFromPath', () => {
   it('got correct images from existing path', () => {
      const expected = [
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
      ];

      expect(getImagesFromPath(testDirectories, "Bali")).toEqual(expected);
   });

   it('did not get images from non-existing path', () => {
      const expected = [];
      expect(getImagesFromPath(testDirectories, "Bali2")).toEqual(expected);
   });

   it('got top level images', () => {
      const expected = [
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
      ];
      expect(getImagesFromPath(testDirectories, "")).toEqual(expected);
   });
});

describe('requireWithBackup', () => {
   it('returns existing image src', () => {
      const expected = require('./../images/BIO.jpg');
      expect(requireWithBackup('BIO.jpg')).toEqual(expected);
   });

   it('returns placeholder src when image does not exist', () => {
      const expected = process.env.PUBLIC_URL + '/placeholder-image.png';
      expect(requireWithBackup('some-made-up-name.JPG')).toEqual(expected);
   });
});