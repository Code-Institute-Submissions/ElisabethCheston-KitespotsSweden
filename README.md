
# MS2 - Kitespots Sweden
A map to locate all the current kitesurfing spots in Sweden.

### Background 
The core focus for this MS2 project was to create functional JavaScript features for user to interact with. Since JavaScript was totally new to me, I wanted to keep it simple and focus on understanding the coding process. I first had a map idea to display all Swedish kitespots with features for each of them and implement weather or route direction functions. But with weather and route directions it became complicated, so had a game idea that I tried, then got stuck. So, went back to do a simpler version of the first idea, kitespots in Sweden. 

## UX
This webpage is for all kitesurfers (and windsurfer/surfer) who want to know all the current  functional spots in Sweden where you can surf. Important to provide maps so user can see the conditions of lounging area, sea depth, which way the spot faces and what the optimal wind direction would be. The idea is to provide a dropdown list with all the spots that easy zooms in to the selected kitespot. 

### Research
Since there is no updated list of all current functional kitespots, I’ve researched old once as well as new once from word of mouth. Then I created a new geojson file for all usable kitespots in geojson.io. Spots that has been excluded are for reasons like private property, unfunctional launching area, rocky water surface, etc.

### User Stories
*	As a user, I would like to get easy access to all the spots
*	As a user, I want the spots to be usable, so I won’t waist a lot of time going there.
*	As a user, I would like to get information of the kitespots wind direction, to determine its usability for current weather.
*	As a user, I want to easily access all the spots for a current wind direction, to know which kitespots are usable at the moment.
*	As a user, I would like to be able to search for specific spots by name, to easily find it.
*	As a user, I would like to see a bar that shows distance, to determined how far it would be to get there.
*	As a user, I would like to be able to zoom in on the spot to see the surrounding, to determine if launching area works for me.
*	As a user, I would like to see the kitespots on different maps, to plan trip.
*	As a user, I would like to know the nearest city, if am not from the area and need to look up commendations.


### Wireframes
PDF files for;
* [Desktop](https://github.com/ElisabethCheston/KitespotsSweden/blob/master/Balsamiq%20Wireframes/MS2%20desktop.pdf)
* [Tablet](https://github.com/ElisabethCheston/KitespotsSweden/blob/master/Balsamiq%20Wireframes/MS2%20Ipad.pdf)
* [Smartphone](https://github.com/ElisabethCheston/KitespotsSweden/blob/master/Balsamiq%20Wireframes/MS2%20Smartphone.pdf)


### Features
Feature functions in the project:

#### Existing Features

* **Zooms** - In the top left corner user can zoom in and out of the map window to better research the area.

* **Search Control** – A dropdown list (in the top right corner) that presents all kitespots. Since it can be hard to know the spelling of some places and user could have heard it by word of mouth, a dropdown list is easier to search for the name instead of a control user have to write in the names.

* **Zoom in to selected spots** - Upon selected spot the maps zooms in to the position and the marker popups with information.
 
* **Cluster spots** - When user first load the page the first thing they can see on the map is cluster spots of all the kitespots. It groups the spots together in groups depending on the projection to make the map less 'messy' or cluttery'. When clicked on the or zoomed in to the cluster divides up to smaller groups until the actual markers shows.

* **Control Layer Toggler** – That contains all the base layer and overlayers. Upon hovering the icon opens and layers can be selected.

* **Base layers** - Gives the users the option to choose different maps to view the kitespots in. Only one map can be displayed at a time.

* **Overlayer** - Gives the user the option to see cities and regions on map. Here both layers can be selected simultaneously.

* **Kitespot popups with image and link** - Popup opens automatic upon selected.

* **City popups with image and link** - Shows the users the position of Swedish cities. The markers do not have cluster on map. Popup include text, picture and link to google.

* **Region popups** - Shows the users the position of Swedish regions as polygons. In the middle of the regions is a popup with region name.

* **Geolocator** - Shows users position on map if user have given permission to it in browser.

* **Scale** - In the bottom left corner user can see the scale that changes value depending on the zoom level.

* **Image popup fit screen** - In order for the popup not to get cut upon open.

* **bringToFront function** - In order to put the city markers on top of polygon layer to make them selectable.

* **Attribution** - In the bottom right corner user can see the attribution from map providers and other integrated systems used.


#### Features Left to Implement
* **Weather prognose** – I would like to implement current and future weather info for each kitespot. Also, marker that changes color once its location works with the wind direction and the parameters showing good enough wind speed for kitesurfing, as well as information on weather conditions, water temperature, air temperature. To get accurate information you need to use backend programs as well as payed services.

* **Kitespot information** – Like to implement information on the different spots like launching size, beach condition (gras, sand, rocks..), water dept, as well as parking, GPS connection (a lot of areas don’t have a good reception). To get accurate information you need to use backend programs as well as payed services.

* **Travel direction** – Implement traveling directions from current location to spot destination. For this you need to use a payed service in ESRI.


### Technologies Used

These are the different languages, frameworks, libraries, and any other tools that you have used to construct this project.


[Leaflet](http://leaflet.com) - Open-source JavaScript library for interactive maps. Works on all major desktops and mobile platforms.

[ESRI](http://esri.com) -	Maps and map tools to work with Leaflet.

[GeoJson](http://geojson.io/) -	For creating all kitespots in Sweden.

[GeoJSONLint](https://geojsonlint.com/) -	For validation of geoJson data.

[HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) -	Used to create map element to show map and to hold and load necessary scripts/css/plugins/apis/etc., files from map and load them in the right order.

[JavaScript](https://www.javascript.com/) -	Used to create functions, elements, controls, run json, etc. Tight all the project parts (JS files, geoJson, images, etc.) together in map.js and channel it for viewing with help of map div in HTML page.

[jQuery](http://jquery.com) -	The project uses jQuery to simplify DOM manipulation. Also, to make some functions easier to call.

[CSS](https://sv.wikipedia.org/wiki/Cascading_Style_Sheets) -	To custom style the maps and controller’s size, fonts, color and etc.

[Balsamiq](https://balsamiq.com/) -	To structure and plan the webpage, and to present it a wireframe for desktops and mobile devices.

[Jigsaw](https://jigsaw.w3.org/css-validator/) -	To validate CSS and HTML.

[JSHint](https://jshint.com/) - To validate JavaScript.

[GitPod](http://gitpod.com) -	An open-source platform used to create the project with code related programs. Making commit documentation and push them to GitHub.

[GitHub](http://github.com) -	For creating and storing the repository as well as deploying the project live.



### Testing

#### Responsive testing

Since I work 99% of the time with the Google Chrome Development tools am constantly checking the console for any error every time a do even a minor change to the page my page.


#### Manual testing

[ **UX Test**](https://github.com/ElisabethCheston/KitespotsSweden/blob/master/Responsive%20Testing/User%20Stories.pdf)

[**CSS Validation**](/workspace/KitespotsSweden/Responsive Testing/cssValidation.png)

[**HTML Validation**](/workspace/KitespotsSweden/Responsive Testing/htmlValidation.png)

[**Jigsaw**](https://jigsaw.w3.org/css-validator/) - To validate CSS and HTML.

[**JSHint Test Result**](https://jsonformatter.curiousconcept.com/) 

* Report on **map.js:** 

- There are 14 functions in this file.

- Function with the largest signature take 2 arguments, while the median is 1.

- Largest function has 7 statements in it, while the median is 2.

- The most complex function has a cyclomatic complexity value of 3 while the median is 1.

[**JSHint**](https://jshint.com/) - To help to detect errors and potential problems in JavaScript. 

[**JSONLint**](https://jsonlint.com/) - For validation of GeoJson data.


#### Describe use on different browsers



|      **Desktop**         | **Firefox** | **Explorer** | **Safari** | **Chrome** |
|--------------------------|-------------|--------------|------------|------------|
*Keeps layout proportions* |     x       |      x       |     x      |    x       |
*Cities overlay works*     |     x       |      x       |     x      |    x       |
*Region overlay works*     |     x       |      x       |     x      |    x       |
*List dropdown*            |     x       |      x       |     x      |    x       |
*Select obj. in list*      |     x       |      x       |     x      |    x       |
*Control layers works*     |     x       |      x       |     x      |    x       |
*Kitespots popups*         |     x       |      x       |     x      |    x       |
*Cities popup*.            |     x       |      x       |     x      |    x       |
*Kitespot popup & link*    |     x       |      x       |     x      |    x       |
*Cities popup & link*      |     x       |      x       |     x      |    x       | 
*Image display*            |     x       |      x       |     x      |    x       |




|      **Tablet**          | **Firefox** | **Explorer** | **Safari** | **Chrome** |
|--------------------------|-------------|--------------|------------|------------|
*Keeps layout proportions* |     x       |      x       |     x      |    x       |
*Cities overlay works*     |     x       |      x       |     x      |    x       |
*Region overlay works*     |     x       |      x       |     x      |    x       |
*List dropdown*            |     x       |      x       |     x      |    x       |
*Select obj. in list*      |     x       |      x       |     x      |    x       |
*Control layers works*     |     x       |      x       |     x      |    x       |
*Kitespots popups*         |     x       |      x       |     x      |    x       |
*Cities popup*.            |     x       |      x       |     x      |    x       |
*Kitespot popup & link*    |     x       |      x       |     x      |    x       |
*Cities popup & link*      |     x       |      x       |     x      |    x       | 
*Image display*            |     x       |      x       |     x      |    x       |





|      **Smartphone**      | **Firefox** | **Explorer** | **Safari** | **Chrome** |
|--------------------------|-------------|--------------|------------|------------|
*Keeps layout proportions* |     x       |      x       |     x      |    x       |
*Cities overlay works*     |     x       |      x       |     x      |    x       |
*Region overlay works*     |     x       |      x       |     x      |    x       |
*List dropdown*            |     x       |      x       |     x      |    x       |
*Select obj. in list*      |     x       |      x       |     x      |    x       |
*Control layers works*     |     x       |      x       |     x      |    x       |
*Kitespots popups*         |     x       |      x       |     x      |    x       |
*Cities popup*.            |     x       |      x       |     x      |    x       |
*Kitespot popup & link*    |     x       |      x       |     x      |    x       |
*Cities popup & link*      |     x       |      x       |     x      |    x       | 
*Image display*            |     x       |      x       |     x      |    x       |


#### Bugs or problems

* **Error message for (index):1** - In console error message "Unchecked runtime.lastError: The message port closed before a response was received.". In conversations with tutors, they said it's some type of bug for the <!DOCTYPE html> that can't be solved.

* **Error message** ( "=> only available in ES6 (use 'esversion: 6')" ) in JSHint when => is used in Leaflet. Solved with "// jshint esversion:6" in the JavaScript files for JSHint to ignore the error.

* **Letter "L"** for Leaflet, throught a warning of "undefined" in JSHint.

* **Json files** - In JSHint sees geojson files as undefined.

* **GeoJson files** - Labeled cities and kitespots files as ".json", but got error messages. Mentor told me, just to assign them as ".js" files to avoid error.

* **HTML Validation** When validating index.html I get error messages for "<!DOCTYPE html>" and "</html>" that tutors said was a bug.


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
- git add .
- git commit -m "Initial commit"
- git push -u
10.	Deployment on GitHub Pages;
11.	Go to “Settings” of the project in GitHub.
12.	Scroll down to GitHub Pages.
13.	Under Source click on “None” and select the “master”, and push “Save”.


#### Repository Link

Click the link below to run my project in the live environment:

https://elisabethcheston.github.io/KitespotsSweden/


#### Run project locally

1.	Go to https://github.com/ElisabethCheston/
2.	Click on Repositories in top menu.
3.	Find the project you like to open and click on it.
4.	In the menu above the project folders/files you have a button called “Code”, click on it.
5.	Dropdown menu shows options “Clone”, “Open with GitHub Desktop” and “Download ZIP”.
6.Clone;
-	Choose the HTTPS option under the Clone icon.
-	Click on the copy icon to the right of the link address.
- Open the directory in your workstation where you like to store the cloned project.
- In the terminal window write; “git clone” + clone url.
-	Push enter.
7.	Download ZIP;
-	Open the zipped file.
-	Move the files to the directory of choice in your workstation project.


#### Run project live

1.	Go to “Settings” of my project in Git Hub.
2.	Scroll down to Git Pages where you see the message “Your site is published…. “
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
- [Add custom markers](https://leafletjs.com/examples/custom-icons/)
- [Polygon overlay](https://gis.stackexchange.com/a/385670/175494) from [Falke Design](http://falke-design.bplaced.net/)
- [Basemaps in ESRI](https://www.arcgis.com/apps/Cascade/index.html?appid=c777765671c44a21885ff957c6dc2357)
- [Fit popup image on map](https://jsfiddle.net/09pe8ko6/)
    
**Media**

* Logo pictures:

[Kitespots image in popup](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbp2lXExvUESoDBDw1g59RUYgIXFhkti4Ibw&usqp=CAU)


* Pictures used for cities:

[Stockholm](https://www.umultirank.org/export/sites/default/.galleries/generic-images/Others/Winter-Calendar/stockholm-3897532_1280.jpg_2040981648.jpg)

[Göteborg](https://bokmassan.se/uploads/2019/03/goteborg-foto-anders-wester-1024x600-webb.jpg)

[Malmö](https://www.sgbc.se/app/uploads/2020/05/V%C3%A4stra-Hamnen-Malm%C3%B6-Foto-Ossian-K-Olsson.jpg)
[Uppsala](https://uppsalasystemvetare.se/wp-content/uploads/2017/05/53130_sweden_uppsala_sweden.jpg)

[Örebro](https://www.stjarnkliniken.com/web/wp-content/uploads/2020/08/occ88rebro-1080x675.jpg")

[Linköping](https://www.linkoping.se/imagevault/publishedmedia/lfuv2nqkwbhmxreq8f9n/DJI_0040_SMALL_MW.jpg)

[Helsingborg](https://hallbartbyggande.com/wp-content/public_html/2018/06/Helsingborg.jpg)

[Jönköping](https://www.jonkoping.se/images/18.f356a12169ec9d53d461a2/1554896047962/(2)%20(2)%20Jkpg_City_Sunset_Lusare_Kallare_300dpi.jpg)

[Umeå](https://www.dagensinfrastruktur.se/wp-content/uploads/sites/3/2018/03/umeas-bild.jpg)

[Karlstad](https://resources.mynewsdesk.com/image/upload/c_limit,dpr_2.625,f_auto,h_700,q_auto,w_380/lzunurrffxlrae0znft0.jpg)

[Gävle](https://svenskpress.se/articles/view/wwwdocs/thumb/thumb.php?src=/wwwdocs/_common_media/article_photos/11344/40924.jpg&w=640)

[Växjö](https://imengine.gota.infomaker.io/?uuid=72e85f25-9984-5d0c-9d5c-6ff2b88819c3&width=960&height=480&type=preview&source=false&q=90&z=100&x=0.000&y=0.125&crop_w=1.000&crop_h=0.750&function=cropresize)

[Halmstad](https://resources.mynewsdesk.com/image/upload/c_limit,dpr_2.625,f_auto,h_700,q_auto,w_360/uc9hugazpv5pkimvvjj23g.jpg)

[Luleå](https://www.christineabroad.com/images//2020/04/att-go%CC%88ra-i-lulea%CC%8A.jpg)

[Östersund](https://resources.mynewsdesk.com/image/upload/c_limit,dpr_2.625,f_auto,h_700,q_auto,w_360/v3yxesvrbutxj3er3f9m.jpg)

[Trollhättan](https://www.erasweden.com/media/3539/trollhattan2019.jpg?width=1364&height=1000&mode=crop&upscale=true&quality=67)

[Kalmar](https://i.pinimg.com/originals/f2/5c/97/f25c9789abe7e1cf6961929eb555f99c.jpg)

[Falun](https://www.grantthornton.se/globalassets/1.-member-firms/sweden/images/photos/offices/open-graph-image/falun_1200x627.jpg)

[Karlskrona](https://www.karlskrona.se/globalassets/kommun-och-politik/sa-arbetar-vi-med/trygghet-och-sakerhet/karlskrona-stad.jpeg?mode=page-intro-medium)

[Nyköping](https://drivkraft.ey.se/wp-content/uploads/2018/06/Nyko%CC%88ping-870x489.jpg)

[Visby](https://lp-cms-production.imgix.net/features/2017/03/visby-0c2723f2c195.jpg)

[Jönköping](https://media.runtvattern.se/Huskvarna-495x389.jpg)

[Härnösand](https://resources.mynewsdesk.com/image/upload/ar_16:9,c_fill,dpr_auto,f_auto,g_auto,q_auto,w_864/okqex5jl534n2m6nmubn.jpg)

[Norrköping](https://thumb.mp-farm.com/91674072/preview.jpg)

[Sundsvall](https://blog.hotelspecials.se/wp-content/uploads/sites/8/2018/02/shutterstock_512158378-1170x632.jpg")

[Borås](https://www.boras.se/images/18.77edf482158fdcbba45b9e35/1482150364114/flygvybor%C3%A5s.jpg)

[Borlänge](https://www.fjellfotografen.se/photo/large/Flygfoto_%C3%B6ver_Borl%C3%A4nge_@20140425_TOJ1082.jpg)

[Mölndal](https://upload.wikimedia.org/wikipedia/commons/a/a7/M%C3%B6lndal.jpg)

[Kristianstad](https://www.atea.se/media/5349/9442140-kristianstad.jpg?anchor=center&mode=crop&width=800&height=600&rnd=132513050210000000)

[Skellefteå](https://svv-cdn.azureedge.net/media/Default/News/Skellefte%C3%A5%20flygbild.jpg)

[Örnsköldsvik](https://www.fjellfotografen.se/photo/large/Flygfoto_%C3%B6ver_%C3%96rnsk%C3%B6ldsvik_@20100906_TOJ7682.jpg)

[Vänersborg](https://scanmagazine.co.uk/content/uploads/2016/01/01_TRO1.jpg)

[Kiruna](https://hallbartbyggande.com/wp-content/public_html/2018/09/Kiruna_hogre_medeltemperatur.jpg)

[Höganäs](https://resources.mynewsdesk.com/image/upload/ar_16:9,c_fill,dpr_auto,f_auto,g_auto,q_auto,w_864/udcno8bhfmgrr6ynnt36.jpg)

[Kinna](https://upload.wikimedia.org/wikipedia/commons/f/ff/Town_of_Skene_Sweden.jpg)

[Mariestad](https://static.lokalguiden.se/filter/960x540,,85,cover/uploads/articles/83/2cbdb2f6fd280e7d4b0a6f025001284d.jpg)

[Mjölby](https://www.mjolby.se/images/18.2884097b148c203dedf421d/1413969404484/S%C3%B6rby%20flygbild%20beskuren.jpg)

[Bollnäs](https://www.bollnas.se/images/Aktuellt/2020/Bolln%C3%A4s_framtid_%C3%A4r_din_webb.jpg)

[Mora](https://www.actic.se/app/uploads/2019/02/Morastad-1080x549.jpg)

[Ulricefhamn](https://www.vandrarhem.online/bilder/stad/84/vandrarhem-ulricehamn.jpg)

[Tibro](https://www.fjellfotografen.se/photo/large/Flygfoto_%C3%B6ver_Tibro_@20160601_TOJ9796.jpg)

[Jönköping](https://media.husmanhagberg.se/cms/2019/11/hero-kontor-mullsjo-habo.jpg)

[Tidaholm](https://www.tidaholm.se/images/18.5a594813169903f99b6c4783/1553516191735/turbinhuson_och_tidan.jpg)

[Strömstad](https://drivkraft.ey.se/wp-content/uploads/2018/06/Stro%CC%88mstad-870x489.jpg)

[Haparanda](https://www.fjellfotografen.se/photo/large/Flygbild_%C3%B6ver_Haparanda_@20100907_TOJ8266.jpg)

[Hjo](https://anhede.se/wp-content/uploads/2015/06/aerial-photo-hjo-sweden-drone-photographer.jpg)

[Kungsör](https://kungsor.se/images/200.3d6b838b15b14f2118415d1d/1490776416734/20161102_Dronarperspektiv_montage_REX_master-72dpi.jpg)

[Vårgårda](https://brfbjorkangen.se/wp-content/uploads/2019/09/Torget.jpg)

[Hjärup](https://i.pinimg.com/originals/27/8b/97/278b97b1378e83b899716eabb12b4ce8.jpg)


**Acknowledgements**

Inspiration for this project from;

* [Windy.com](https://www.windy.com/?59.327,18.065,5,i:pressure)
* Kitesurfing friend


### LINKS:

[Example of README.md](https://github.com/Code-Institute-Solutions/readme-template/blob/master/README.md) -As a guideline to write README file.

[Markdown Cheatsheet](https://guides.github.com/features/mastering-markdown/) -For reference

[OpendataSoft](https://public.opendatasoft.com/explore/?sort=modified) -Providing geojson data for Sweden.

[Geographic Information Systems](https://gis.stackexchange.com/) -For tips on features.

[Google](https://google.com/) -To search for pictures and relevant data.


