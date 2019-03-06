import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import directories from './directoryReducer.js'
import latlongs from './latLongReducer.js'
import comments from './commentReducer.js'

const rootReducer = combineReducers({
  directories,
  latlongs,
  comments,
  form: formReducer
});

export default rootReducer;
