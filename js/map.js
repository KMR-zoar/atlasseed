var map = L.map('map');
var id = "pk.eyJ1Ijoia21yaHJ5ayIsImEiOiIydWNqb0o0In0.kg0YV5AjfbBdlPQgAF76sw";
var tile = 'https://api.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token=' + id;
var attr = '&copy <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> | &copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';

L.tileLayer(
   tile,
   {
      maxZoom: 19,
      attribution: attr,
      mapid: 'mapbox.comic'
   })
   .addTo(map);

map.setView([35.926780, 139.483452], 11);