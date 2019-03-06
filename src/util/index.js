/**
   Requires image. If not found uses a placeholder.
*/
export function requireWithBackup(imagePath) {
   let required = "";

   try {
      required = require('./../images/' + imagePath);
   }
   catch(error) {
      // https://icons8.com/icons/set/image-placeholder 
      required = process.env.PUBLIC_URL + '/placeholder-image.png';
   }

   return required;
}

 /** 
    Given an array of directories and an image path, returns
    an array of images within the directory.
  */
  export function getImagesFromPath(directories, imgPath) {
    var directory = directories.find((dir) => dir.directory === imgPath);

    return directory ? directory.images : [];
  }