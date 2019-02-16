#PLACED IN COMPONENTS TO MIRROR RETRIEVING IMAGES ('./../images/')
import os, sys

# Redirects sys.stdout to images.JSON
orig_stdout = sys.stdout
f = open('images.js', 'w')
sys.stdout = f

SKIP_FILES = ['.DS_Store', 'README.md', 'BIO.jpg']
IMAGE_EXTENSIONS = ['.jpg', '.png']

# Set the directory you want to start from
imagesDir = './../images/'
print('export const directories = [')

level = 0
for dirName, subdirList, fileList in os.walk(imagesDir):
  # Removes file from file list if it appears in SKIP_FILES
  for file in SKIP_FILES:
    if file in fileList:
      fileList.remove(file)

  # Sort top level directories but allow for images to be random
  if level == 0:
    fileList.sort()
    level += 1

  print('\t{')
  print('\t%s' % '"directory": "' + dirName + '",')
  print('\t%s' % '"sub-directories": ' + str(subdirList) + ',')
  print('\t%s' % '"files": "' + str(fileList) + '",')
  print('\t%s' % '"images": [')

  start = dirName.find(imagesDir) + len(imagesDir)
  dirName = dirName[start:]
  # traverses all files
  for fname in fileList:
    # finds the end index of ./../images/ to use as start point and removes it

    # removes .JPG or jpg from file Name
    noExtension = fname[:fname.lower().find('.JPG'.lower())]
    print('\t\t%s' % '{')
    print('\t\t\t%s' % '"name": "' + noExtension + '",')
    # Checks if at top level -- (./images/)
    if dirName:
      print('\t\t\t%s' % '"image": "' + dirName + "/" + fname + '",')
    else:
      print('\t\t\t%s' % '"image": "' + fname + '",')

    print('\t\t%s' % '},')
  print('\t]},')
print('];')

# Resets sys.stdout and closes file 
sys.stdout = orig_stdout
f.close()