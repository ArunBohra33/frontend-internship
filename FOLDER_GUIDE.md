## The Folder Structure Explanation

1. Public directory holds the public folder which includes the favicon and the index.html file

2. The src directory consists all the react files
   a. There are 4 folders in src ==> app, assets, Components, Layout
   b. app folders consists of the main app file App.js which in turn includes main components like Sidebar and Dashboard.
   c. assets folder consists of files that are taken from other sources like images and svgs.
   d. Components is the folder where you will find all the components for the app.
   The components are categorized according to their position. For example, all sidebar components are included inside a folder named Sidebar-components
   e. Layout includes the files or components which make up the layout of the whole app.
   These layout files in turn include the components from the point d.
   f. Lastly inside src there is the index.js file which includes all of the layout components to make up the app.
3. At last
   we have package.json file which includes data of all the npm packages.
