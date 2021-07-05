let mypumpmap = L.map('pumpmapid').setView([30,-98], 4)
let myEarthmap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.').addTo(mypumpmap)
let myTopomap = L.tileLayer ('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png')
let myOpenmap = L.tileLayer ('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png')

let myBasemaps = {
  'Earth map': myEarthmap,
  'Topo map': myTopomap,
  'Open street map': myOpenmap
}
L.control.layers(myBasemaps).addTo(mypumpmap)

myGeojsonStyle = function (state) {
  let popmales = state.properties.MALES
  let popfemales= state.properties.FEMALES
  let stateColor='blue'
  if (popmales < popfemales) (stateColor = 'red')
  let myGeojsonStyle = {
    color: stateColor,
    weight: 1,

  }
  return myGeojsonStyle
}

function createPopup (state, statelayer) {
  let name = state.properties.STATE_NAME
  let popmales = state.properties.MALES
  let popfemales = state.properties.FEMALES

  statelayer.bindPopup('Population of males in ' + name + ' is ' + popmales +'<br>Population of females in ' + name +' is '+ popfemales +'.')
}

myGeojsonOptions = {
  style: myGeojsonStyle,
  onEachFeature: createPopup
}
L.geoJSON(stateData, myGeojsonOptions).addTo(mypumpmap)
