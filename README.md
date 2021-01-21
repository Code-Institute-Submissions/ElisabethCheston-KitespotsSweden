
# MS2 - Kitespots Sweden
A map to locate all the current kitesurfing spots in Sweden.

### Background 
The core focus for this MS2 project was to create functional Javascript features for user to interact with. Since JavaScript was totally new to me, I wanted to keep it simple and focus on understanding the coding process. I first had a map idea to display all Swedish kitespots with features for each of them and implement weather or route direction functions. But with weather and route directions it became complicated, so had a game idea that I tried, then got stuck. So, went back to do a simpler version of the first idea, kitespots in Sweden. 

## UX
This webpage is for all kitesurfers (and windsurfer/surfer) who want to know all the current spots in Sweden you can surf from. Important to provide maps so user can see the conditions of lounging area, sea depth, which way the spot faces and what the optimal wind direction would be. The idea is to provide a dropdown list with all the spots that easy zooms in to the selected kitespot. 

### Research
Since there are no updated list of all current kitespots that are functional, I’ve researched old once. Checked their locations and created a new geojson file for them in geojson.io. I also checked potential spots places and added them. Spots that was not functional was for reasons like private property, unfunctional launching area, rocky watersurface.

### User Stories
*	As a user, I would like to get easy access to all the spots
*	As a user, I want the spots to be usable, so I won’t waist a lot of time going there.
*	As a user, I would like to get information of the kitespots wind direction, to determine its usability for current weather.
*	As a user, I want to easily access all the spots for a current wind direction, to know which kitespots are usable at the moment.
*	As a user, I would like to be able to search for specific spots by name, to easily find it.
*	As a user, I would like to see a bar that shows distance, to determined how far it would be to get there.
*	As a user, I would like to be able to zoom in on the spot to see the surrounding, to determine if launching area works for me.
*	As a user, I would like to see the kitespots on different maps, to plan trip.


### Wireframes
PDF files for;
* [Desktop](https://github.com/ElisabethCheston/KitespotsSweden/blob/master/MS2%20wireframe%20Desktop.pdf)
* [Tablet](https://github.com/ElisabethCheston/KitespotsSweden/blob/master/MS2%20wireframe%20Tablet.pdf)
* [Smartphone](https://github.com/ElisabethCheston/KitespotsSweden/blob/master/MS2%20wireframe%20Smartphone.pdf)


### Features
In this section, you should go over the different parts of your project and describe each in a sentence or so.

#### Existing Features
**Search Control** – A dropdown list that presents all kitespots. Since it can be hard to know the spelling of some places and user could have heard it by word of mouth, a dropdown list is easer to search for the name instead of a control user have to write in the names.  

* **Sorted** list by region latitude. Before each spotname shows a region (north/south/..). I’ve selected them in these groups determined by distance (if you are in an area you should be able to reach the other spots by car). 

* **Zooms** to the spot the user has chosen to click on, so user can easier research the area.

* **Popup** opens with information about the kitespot.


**Control Layer Toggler** – That contains all the baselayer and overlayers.

* **Baselayers** gives the users the option to choose different maps to view the kitespots in. This is important, to check out the surrounding to determine if for example the launching area is in a condition that meets the users need, level of experience in combination with weather conditions. 

* **Overlayer** gives the user the option to check out spots in a surtain area. For example, if a kitesurfer plans a trip to Gotland (Swedish island south east of Stocholm), they can study the different spot areas.  


#### Features Left to Implement
* Weather prognose – I would like to implement current and future weather info for each kitespot. Also marker that changes color once its location works with the wind direction and the parameters showing good enough wind speed for kitesurfing, as well as information on weather conditions, water temperature, air temperature. To get accurate information you need to use backend programs as well as payed services.

* Kitespot information – Like to implement information on the different spots like launching size, beach condition (gras, sand, rocks..), water dept, as well as parking, GPS connection (a lot of areas don’t have a good reception). To get accurate information you need to use backend programs as well as payed services.

* Spot direction – Implement traveling directions from current location to spot destination. For this you need to use a payed service in ESRI.


### Technologies Used

These are the different languages, frameworks, libraries, and any other tools that you have used to construct this project.


[Leflet](http://leaflet.com) - Open-source JavaScript library for interactive maps. Works on all major desktops and mobile platforms.


[ESRI](http://esri.com) -	Maps and map tools to work with Leaflet.

[OpendataSoft](https://public.opendatasoft.com/explore/?sort=modified) -	Providing geojson data for Sweden.

[SMHI](http://smhi.com) -	Providing current weather data.

[GeoJson](http://geojson.io/) -	For making all kitespots in Sweden.

[GeoJSONLint](https://geojsonlint.com/) -	For validation of geoJson data.

[HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) -	Used to create map element to show map and to hold and load necessary scripts/css/plugins/apis/etc., files from map and load them in the right order.

[JavaScript](https://www.javascript.com/) -	Used to create functions, elements, controls, run json, etc. Tight all the project parts (JS files, geoJson, images, etc.) together in map.js and channel it for viewing with help of map div in HTML page.

[jQuery](http://jquery.com) -	The project uses jQuery to simplify DOM manipulation. Also to make some functions easier to call.

[CSS](https://sv.wikipedia.org/wiki/Cascading_Style_Sheets) -	To custom style the maps and controller’s size, fonts, color and etc.

[Font Awesome](https://fontawesome.com/) -	Used for icons used for markers.

[Flaticon](https://www.flaticon.com/) -	Icons used for markers.

[Google Fonts](https://fonts.google.com/) -	Used for font style in project.

[Balsamiq](https://balsamiq.com/) -	To structure and plan the webpage, and to present it  a wireframe for desktops and mobile devices.

[Jigsaw](https://jigsaw.w3.org/css-validator/) -	To validate CSS and HTML.

[Validator W3C](https://validator.w3.org/) -	To validate JS.

[Jasmine](https://github.com/TravelTimN/ci-ifd-lead/blob/main/week5-jasmine/jasmine.md) -	To help with the code testing for JavaScrip.

[GitPod](http://gitpod.com) -	An open source platform used to create the project with code related programs. Making commit documentation and push them to GitHub.

[GitHub](http://github.com) -	For creating and storing the repository as well as deploying the project live.


### Testing

#### Automate testing

I’ve ran the Jasmine test towards the end of the project though I had a hard time understanding it, do to that this is all new to me. I’ve used the Jasmine boilerplate to test following code.


#### Jasmin test files


#### Responsive testing

Since I work 99% of the time with the Google Chrome Development tools am constantly checking the console for any error everytime a do even a minor change to the page my page.


#### Manual testing

* User stories test
* Validation - for HTML, CSS and GeoJson
* Jigsaw - To validate CSS and HTML.
* Validator W3C - To validate JS.
* GeoJSONLint - For validation of GeoJson data.

#### Describe use on different browsers

<In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.>


#### Bugs or problems

<You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.
If this section grows too long, you may want to split it off into a separate file and link to it from here.>


### Deployment

To deploy my project on GitHub from Git Pod:

1.	Go to Code Institutes gitpod-full-template on Git Hub
2.	Click on the button ‘Use this template’ to the left of the Gitpod button in button row. to create a new project
3.	Create a new repository from template. Make sure that is my gitpod account is selected and shown in the ‘Owner’ window.
4.	Choose a name of your repository (I choose ’KitespotsSweden’).
5.	I let the ‘Public’ button be selected and click ‘Create repository from template’-button at the bottom of the page.
6.	Once the GitHub done creating the project, I push the button ‘GitPod’ to load the project in GitPod.
7.	Run ‘python3 -m http.server‘ to connect to server.
8.	Initialized Git with writing git init command in the terminal.
9.	Create the project and commit often files/folders to GitHub by;
* git add .
* git commit -m "Initial commit"
* git push -u
10.	Deployment on GitHub Pages;
11.	Go to “Settings” of the project in GitHub.
12.	Scroll down to GitHub Pages.
13.	Under Source click on “None” and select the “master”, and push “Save”.


#### Repository Link

Click the link below to run my project in the live environment:

https://elisabethcheston.github.io/KitespotsSweden/


#### Run project locally

*	Go to https://github.com/ElisabethCheston/
*	Click on Repositories in top menu.
*	Find the project you like to open and click on it.
*	In the menu above the project folders/files you have a button called “Code”, click on it.
*	Dropdown menu shows options “Clone”, “Open with GitHub Desktop” and “Download ZIP”.
*	Clone;
* *	Choose the HTTPS option under the Clone icon.
* *	Click on the copy icon to the right of the linkaddress.
* * Open the directory in your workstation where you like to store the cloned project.
* * In the terminal window write; “git clone” + clone url.
* *	Push enter.
*	Download ZIP;
* *	Open the zipped file.
* *	Move the files to the directory of choice in your workstation project.


#### Run project live

1.	Go to “Settings” of my project in Git Hub.
2.	Scoll down to Git Pages wher you see the message “Your site is published…. “
3.	Click on the url or copy and paste it in your browser. 


### Credits

**Content**

- [Creating geolocator](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [Creating the basic search engine](https://www.codota.com/code/javascript/functions/leaflet/DomUtil)
- [To modify the search engine](https://stackoverflow.com/questions/35772717/searching-markers-with-leaflet-control-search-from-drop-down-list)
- [Creating clustering markers in Leaflet](https://github.com/Leaflet/Leaflet.markercluster)
- [How to add GeoJson to Leaflet ](https://leafletjs.com/examples/geojson/)
- [Example of editing](https://leafletjs.com/reference-1.7.1.html#geojson)
- [Add markers to control](https://leafletjs.com/examples/layers-control/)
- [Modify the markers in the layer control](https://esri.github.io/esri-leaflet/examples/layers-control.html)
- [Add custom markers:](https://leafletjs.com/examples/custom-icons/)                                                                                
- [Basemaps in ESRI](https://www.arcgis.com/apps/Cascade/index.html?appid=c777765671c44a21885ff957c6dc2357)
    
**Media**
- Markers from;
[Font Awesome](https://fontawesome.com/) & [Flaticon](https://www.flaticon.com/)

**Acknowledgements**
Inspiration for this project from;

- Windy.com
- Kitesurfing friend



### LINKS:

Example of README.md	
https://github.com/Code-Institute-Solutions/readme-template/blob/master/README.md

Markdown Cheatsheet
https://guides.github.com/features/mastering-markdown/


