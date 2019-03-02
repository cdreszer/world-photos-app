import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import displayPage from './displayPage.js'
import directories from './directoryReducer.js'
import latlongs from './latLongReducer.js'
import comments from './commentReducer.js'

const rootReducer = combineReducers({
  displayPage,
  directories,
  latlongs,
  comments,
  form: formReducer
});

export default rootReducer;
