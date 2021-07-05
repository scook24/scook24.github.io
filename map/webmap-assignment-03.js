let mypumpmap = L.map('pumpmapid').setView([30.01628,-90.069496], 15)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.').addTo(mypumpmap)

let station = L.icon({
  iconUrl: 'Pump-Stations_color.png',
  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})

let markerCoords= [30.01628,-90.069496]
let markerOptions= { icon: station }
let marker = L.marker(markerCoords, markerOptions).addTo(mypumpmap)

let riverCoords= [
  [30.021304,-90.070722],
  [30.021341,-90.0704],
  [30.011975,-90.069594],
  [30.011975,-90.070002]
]

let riverStyle = {
  color: 'orange',
  fillColor: 'yellow',
  weight: 1
}
let river= L.polygon (riverCoords, riverStyle).addTo(mypumpmap)
