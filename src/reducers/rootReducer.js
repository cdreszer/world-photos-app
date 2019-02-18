import { combineReducers } from 'redux'
import displayPage, {initialState as displayPageInitialState} from './displayPage.js'
import directories, {initialState as directoriesInitialState} from './directoryReducer.js'
import latlongs from './latLongReducer.js'
import { directories as DIRECTORIES } from './../components/images.js'

//complete state should look more like:
export const initialState = {
   displayPage: displayPageInitialState,
   directories: directoriesInitialState
};


const rootReducer = combineReducers({
  displayPage,
  directories,
  latlongs
});

export default rootReducer;
