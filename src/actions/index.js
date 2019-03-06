export const DIRECTORY = 'DIRECTORY';
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_LAT_LONG = 'ADD_LAT_LONG';

export const ACTION_TYPES = [DIRECTORY, ADD_COMMENT, ADD_LAT_LONG];

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