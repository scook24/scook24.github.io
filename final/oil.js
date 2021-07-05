let mypumpmap = L.map('pumpmapid').setView([30,-94], 7)
let CartoDB_DarkMatter = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(mypumpmap);
let OpenInfraMap_Petroleum = L.tileLayer('https://tiles-{s}.openinframap.org/petroleum/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://www.openinframap.org/about.html">About OpenInfraMap</a>'
}).addTo(mypumpmap);
let myTopomap = L.tileLayer ('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.')
let myOpenmap = L.tileLayer ('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}')

let myBasemaps = {
  'Petroleum map': (CartoDB_DarkMatter, OpenInfraMap_Petroleum),
  'Esri World Imagery': myTopomap,
  'Esri Ocean': myOpenmap
}

let myLayerStyle = {
  color: 'Brown',
  radius: 3
}

function createPopup (feature, layer)
{
let date = feature.properties.INSTALL
let Id = feature.properties.PLATFORM_I
layer.bindPopup ('<strong>ID:</strong> ' + Id +  '<br><strong>Install date: </strong>' + date)
}

// add all of the GeoJSON data to the empty layer we created
function createCircles (feature, latlng) {
  return L.circleMarker(latlng, myLayerStyle)
}

// create an options object that specifies which function will called on each feature
let myLayerOptions = {
  pointToLayer: createCircles,
  onEachFeature: createPopup
}


// create the GeoJSON layer from the myLayerData object (not shown in this snippet)
L.geoJSON(platform, myLayerOptions).addTo(mypumpmap)

L.control.layers(myBasemaps).addTo(mypumpmap)
