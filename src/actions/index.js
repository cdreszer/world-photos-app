export const DISPLAY_PAGE = 'DISPLAY_PAGE';
export const DIRECTORY = 'DIRECTORY';
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_LAT_LONG = 'ADD_LAT_LONG';

export const ACTION_TYPES = [DISPLAY_PAGE, DIRECTORY, ADD_COMMENT, ADD_LAT_LONG];

//expects content = {display, imagePath}
export const displayPage = (content) => ({
  type: DISPLAY_PAGE,
  content: content
});

export const directoryAction = (content) => ({
   type: DIRECTORY,
   content: content
});

// expects content = {imagePath, author, comment}
export const addComment = (content) => ({
   type: ADD_COMMENT,
   content: content
});

// expects content = {dirId, lat, long}
export const addLatLong = (content) => ({
   type: ADD_LAT_LONG,
   content: content
});