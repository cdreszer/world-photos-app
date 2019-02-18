import {ADD_LAT_LONG} from './../actions/index.js';
import {LAT_LONGS} from "./LatLongs.js"

export const initialState = LAT_LONGS;

// comment action.content: {imagePath, author, comment}
const latlongs = (state= initialState, action) => {
   switch (action.type) {
      case ADD_LAT_LONG:
         let latLong = action.content;
         return [...state, latLong];
      default:
         return state;
   }
}

export default latlongs;