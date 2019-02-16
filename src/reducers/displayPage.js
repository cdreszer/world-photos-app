import { directories as DIRECTORIES } from './../components/images.js'

export const initialState = {
   display: "HOME_PAGE", 
   imagePath: "",
   directories: DIRECTORIES
};

const displayPage = (state= initialState, action) => {
   switch (action.type) {
      case 'DISPLAY_PAGE':
         return {
            display: action.content.display,
            imagePath: action.content.imagePath,
            directories: [...state.directories]
         };
      default:
         return state;
   }
}

export default displayPage;