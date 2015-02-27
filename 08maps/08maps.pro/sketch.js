try {
	
	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	// THIS IS THE SECTION WHERE PROCODING INJECTS THE CANVAS SCRIPT
	//
	//
	
	// Leaflet
// kaushik

/* global L:false ,
          featureCollection: false */
/* jshint unused:false */

var lat = 43.0045;
var lon = -78.7814;
var zoom = 16;

var map = L.map("mapdiv", {
    center: [lat, lon],
    zoom: zoom,
    scrollWheelZoom: false,
    boxZoom: true,
    trackResize: true
});

//Similar way Object 
//var option = {};
//option.zoom = 16;
//var map = L.map("mapdiv",option);

//var option = {
//    zoom:16
//    };

L.tileLayer("http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png", {
    attribution: "Map data &copy; 2014 OSM",
    maxZoom: 18
}).addTo(map);

var ownStyle = {
    radius: 14,
    fillColor: "red",
    color: "mintcream",
    weight: 4,
    opacity: 1.0,
    fillOpacity: 0.8
};

var marker = L.circleMarker([lat, lon], ownStyle).addTo(map).bindPopup("You are defenitely not here");


function loadFeatures() {
    var featureLayer = L.geoJson().addTo(map);
    featureLayer.addData(featureCollection).bindPopup(function(feature) {
        return L.Util.template('<p>{name}<br>{description}</p>', {
            name: "g",
            description: "dd"
        });
    });
}

setTimeout(loadFeatures, 200);
	
	//
	//
	// THIS WAS THE SECTION WHERE PROCODING INJECTED THE CANVAS SCRIPT
	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	
} catch (e) {
	_procoding_throwError(e);
}
