import latlongs, {initialState} from './latLongReducer.js'
import { ADD_LAT_LONG, addLatLong } from './../actions'

const testLatLong = 
{
   name: "Bali",
   imagePath: "Bali.JPG",
   lat: -8.6478, 
   lng: 115.1385,
   path: []
};

describe("latLongReducer", () => {
  it('Initial state is correct', () => {
    const action = { type: 'dummy' };

    expect(latlongs(undefined, action)).toEqual(initialState);
  });

  it('Returns the new correct state when passing action', () => {
    const action = { type: ADD_LAT_LONG, content: testLatLong };
    const expectedState = [...initialState, testLatLong]

    expect(latlongs(undefined, action)).toEqual(expectedState);
  });
});