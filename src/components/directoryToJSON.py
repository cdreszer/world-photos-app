#PLACED IN COMPONENTS TO MIRROR RETRIEVING IMAGES ('./../images/')
import os, sys

# Redirects sys.stdout to images.JSON
orig_stdout = sys.stdout
f = open('images.JSON', 'w')
sys.stdout = f

# Set the directory you want to start from
imagesDir = './../images/'
print('[')
for dirName, subdirList, fileList in os.walk(imagesDir):
   # Removes .DS_Store from file list if it appears
   if '.DS_Store' in fileList:
      fileList.remove('.DS_Store')
   print('\t{')
   print('\t%s' % '"directory": "' + dirName + '",')
   print('\t%s' % '"sub-directories": "' + str(subdirList) + '",')
   print('\t%s' % '"files": "' + str(fileList) + '",')
   print('\t%s' % '"images": [')
   # traverses all files
   for fname in fileList:
     # finds the end index of ./images/ to use as start point and removes it
     start = dirName.find(imagesDir) + len(imagesDir)
     dirName = dirName[start:]
     # removes .JPG or jpg from file Name
     noExtension = fname[:fname.lower().find('.JPG'.lower())]
     print('\t\t%s' % '{')
     print('\t\t\t%s' % '"name": "' + noExtension + '",')
     # Checks if at top level -- (./images/)
     if dirName:
         print('\t\t\t%s' % '"image": "' + dirName + "/" + fname + '",')
         # print('\t\t\t%s' % '"isDir": "false"')
     else:
         print('\t\t\t%s' % '"image": "' + fname + '",')
         # print('\t\t\t%s' % '"isDir": "true",')
         # print('\t\t\t%s' % '"sub-directories": "' + str(subdirList) + '",')
     print('\t\t%s' % '},')
   print('\t]},')
print(']')

# Resets sys.stdout and closes file 
sys.stdout = orig_stdout
f.close()