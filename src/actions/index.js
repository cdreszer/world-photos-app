//expects content = {display, imagePath}
export const displayPage = (content) => ({
  type: 'DISPLAY_PAGE',
  content: content
})

export const directoryAction = (content) => ({
   type: 'DIRECTORY',
   content: content
})