export const ACTION_TYPES = ['DISPLAY_PAGE', 'DIRECTORY', 'ADD_COMMENT'];

export const DISPLAY_PAGE = 'DISPLAY_PAGE';
export const DIRECTORY = 'DIRECTORY';
export const ADD_COMMENT = 'ADD_COMMENT';

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