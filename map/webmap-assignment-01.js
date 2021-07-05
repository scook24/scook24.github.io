//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let mypumpmap = L.map('pumpmapid').setView([30.01628,-90.069496], 18)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.').addTo(mypumpmap)
let marker = L.marker([30.01628,-90.069496]).addTo(mypumpmap)
let marker2 = L.marker([29.988355,-90.068003]).addTo(mypumpmap)
let polygon = L.polygon([
  [30.021304,-90.070722],
  [30.021341,-90.0704],
  [30.011975,-90.069594],
  [30.011975,-90.070002]
]).addTo(mypumpmap);
polygon.bindPopup('London Avenue Canal Outfall')
marker.bindPopup('Pumping Station No. 4')
marker2.bindPopup('Pumping Station No. 3')


mypumpmap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})

// create a red polyline from an array of LatLng points
var latlngs = [
    [29.988474,-90.068169],
    [29.988502,-90.067654],
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(mypumpmap);
