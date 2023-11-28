let map = L.map('map', {
    minZoom:11,
}).setView([19.241882,-103.726051],11)

//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Configurar popup
function popup(feature,layer) {
    if( feature.properties.POBTOT){
        layer.bindPopup("<strong>Poblacion Total:</strong>" + feature.properties.POBTOT + "<strong>id:</strong>" + feature.properties.name)
    }
}

//Agregar capa en json
L.geoJson(agebs);

let agebsJS = L.geoJson(agebs,{
  style: style,
    onEachFeature: popup
});


// Geocoder buscador en el mapa 
var geocoder = L.Control.geocoder({
  defaultMarkGeocode: false
})
  .on('markgeocode', function(e) {
    var bbox = e.geocode.bbox;
    var poly = L.polygon([
      bbox.getSouthEast(),
      bbox.getNorthEast(),
      bbox.getNorthWest(),
      bbox.getSouthWest()
    ]).addTo(map);
    map.fitBounds(poly.getBounds());
  })
  .addTo(map);



  

                                    ////////////////////////////////////////////////////////////////
                                    ////////////////////////////////////////////////////////////////
                                        // Funciones para desplegar la botonera principal  //
                                    ////////////////////////////////////////////////////////////////
                                    ////////////////////////////////////////////////////////////////


   // Función para mostrar/ocultar el menú desplegable al hacer clic en el botón de capas
   function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

// Función para mostrar/ocultar el menú desplegable al hacer clic en el botón de mapas
function toggleDropdownMapas() {
    var dropdownMapas = document.getElementById("dropdownSubMapas");
    dropdownMapas.style.display = (dropdownMapas.style.display === "block") ? "none" : "block";
}

 // Función para mostrar/ocultar el menú desplegable al hacer clic en el botón de medicion
function toggleDropdownMedicion() {
    var dropdownMedicion = document.getElementById("dropdownMedicion");
    dropdownMedicion.style.display = (dropdownMedicion.style.display === "block") ? "none" : "block";
}

function toggleDropdown1() {
    var dropdown1 = document.getElementById('dropdown1');
    dropdown1.style.display = (dropdown1.style.display === 'block') ? 'none' : 'block';
}

function toggleDropdown2() {
    var dropdown2 = document.getElementById('dropdown2');
    dropdown2.style.display = (dropdown2.style.display === 'block') ? 'none' : 'block';
}

function toggleDropdown3() {
  var dropdown3 = document.getElementById('dropdown3');
  dropdown3.style.display = (dropdown3.style.display === 'block') ? 'none' : 'block';
}


function ocultarMenu() {
  var dropdown1 = document.getElementById("dropdown1");
  var dropdown2 = document.getElementById("dropdown2");
  var dropdown3 = document.getElementById("dropdown3");
  var dropdownSubMapas = document.getElementById("dropdownSubMapas");
  dropdown1.style.display = "none";
  dropdown2.style.display = "none";
  dropdown3.style.display = "none";
  dropdownSubMapas.style.display = "none";
}

document.addEventListener("DOMContentLoaded", ocultarMenu);

function getColor(d) {
  return d > 1000
    ? "#800026"
    : d > 500
    ? "#BD0026"
    : d > 200
    ? "#E31A1C"
    : d > 100
    ? "#FC4E2A"
    : d > 50
    ? "#FD8D3C"
    : d > 20
    ? "#FEB24C"
    : d > 10
    ? "#FED976"
    : "#FFEDA0";
}

//CREAR LA FUNCION PARA MOSTRAR LA SIMBOLOGIA DE ACUERDO AL CAMPO POBTOT
function style(feature) {
  return {
    fillColor: getColor(feature.properties.POBTOT),
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
  };
}

// Función para mostrar/ocultar la capa de población total según el estado del checkbox
function togglePoblacionLayer() {
  var poblacionCheckbox = document.getElementById("idPoblacionTot");

  // Si el checkbox está marcado, añadir la capa al mapa
  if (poblacionCheckbox.checked) {
    agebsJS.addTo(map);
  } else {
    // Si el checkbox no está marcado, quitar la capa del mapa si ya está agregada
    if (map.hasLayer(agebsJS)) {
      map.removeLayer(agebsJS);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var poblacionCheckbox = document.getElementById("idPoblacionTot");
  poblacionCheckbox.addEventListener("change", togglePoblacionLayer);

  // Asegurarse de que la capa no esté añadida al mapa al inicio
  togglePoblacionLayer();
});