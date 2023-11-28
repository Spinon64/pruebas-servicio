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
L.geoJson(agebs).addTo(map);

let agebsJS = L.geoJson(agebs,{
    onEachFeature: popup
}).addTo(map);


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

