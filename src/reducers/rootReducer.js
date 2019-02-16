import { combineReducers } from 'redux'
import displayPage from './displayPage.js'
import directories from './directoryReducer.js'
import { directories as DIRECTORIES } from './../components/images.js'

//complete state should look more like:
export const initialState = {
   displayPage: {
      display: "HOME_PAGE", 
      imagePath: ""
   },
   directories: DIRECTORIES
};


const rootReducer = combineReducers({
  displayPage,
  directories
});

export default rootReducer;
