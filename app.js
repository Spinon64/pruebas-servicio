let map = L.map('map').setView([19.241882,-103.726051],11)

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