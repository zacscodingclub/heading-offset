
$(document).ready(function(){
  var view = new ol.View({
    center: ol.proj.transform([2.1833, 41.3833], 'EPSG:4326', 'EPSG:3857'),
    zoom: 6
  });

  var map = new ol.Map({
    target: 'map',  // DOM element where map goes
    renderer: 'canvas',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM() // Add Tile layer from OpenStreetMap
      })
    ],
    view: view,
    
  });
});