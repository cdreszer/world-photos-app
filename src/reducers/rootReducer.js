import { combineReducers } from 'redux'
import displayPage from './displayPage.js'
import directories from './directoryReducer.js'
import latlongs from './latLongReducer.js'

const rootReducer = combineReducers({
  displayPage,
  directories,
  latlongs
});

export default rootReducer;
