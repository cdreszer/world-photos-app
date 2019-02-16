export const initialState = {
   display: "HOME_PAGE", 
   imagePath: "",
};

const displayPage = (state= initialState, action) => {
   switch (action.type) {
      case 'DISPLAY_PAGE':
         return {
            display: action.content.display,
            imagePath: action.content.imagePath,
         };
      default:
         return state;
   }
}

export default displayPage;