try {
	
	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	// THIS IS THE SECTION WHERE PROCODING INJECTS THE CANVAS SCRIPT
	//
	//
	
	try {
    /* global L:false,
          featureCollection:true,
          mapdiv:false,
          procoding:false
    */
    /*jshint unused:false */

    // initial location and zoom level
    //var lat = 12.976981;
    //var lon =  77.573050;
    //var lon = -75.78281950950623;
    //var lat = 43.00101433142999;
    var lon = 80.22525787353516;
    var lat = 13.082153590400935;

    var zoom = 12;

    //coordURL = "";
    //function getCoords() {
    //				var xhr = new XMLHttpRequest();
    //				xhr.open("GET", coordURL, true);
    //				xhr.onreadystatechange = function() {
    //					if (xhr.readyState == XMLHttpRequest.DONE) {
    //						var featureCollection = JSON.parse(xhr.responseText);
    //					}
    //				};
    //				xhr.send();
    //			}


    //Icons

    // Leaf Icons
    var LeafIcon = L.Icon.extend({
        options: {
            // shadowUrl: 'leaf-shadow.png',
            iconSize: [38, 95],
            shadowSize: [50, 64],
            iconAnchor: [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor: [-3, - 76]
        }
    });

    var blackIcon = new LeafIcon({
        iconUrl: './resources/images/pin_black.png'
    }),
        blueIcon = new LeafIcon({
            iconUrl: './resources/images/pin_blue.png'
        }),
        redIcon = new LeafIcon({
            iconUrl: './resources/images/pin_red.png'
        }),
        yellowIcon = new LeafIcon({
            iconUrl: './resources/images/pin_yellow.png'
        });

    L.icon = function(options) {
        return new L.Icon(options);
    };


    // init leflet map
    var map = L.map("mapdiv", {
        center: [lat, lon],
        zoom: zoom,
        scrollWheelZoom: false,
        doubleClickZoom: true,
        boxZoom: true,
        trackResize: false
    });

    // create actual map (you can use any map tile server, not just OSM!)
    L.tileLayer("http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png", {
        attribution: "Map data &copy; 2014 OSM",
        maxZoom: 18
    }).addTo(map);

    //Showing a location
    // style current position
    var ownStyle = {
        radius: 8,
        fillColor: "blue",
        color: "white",
        weight: 4,
        opacity: 0.8,
        fillOpacity: 0.9
    };

    // show own location
    var marker = L.circleMarker([lat, lon], ownStyle).addTo(map).bindPopup("Your Location");


    // Loading Features 
    // add markers from geoJSON
    //function loadFeatures() {
    //    var featureLayer = L.geoJson().addTo(map);
    //    featureLayer.addData(featureCollection));;
    //}

    // Get coordinates and popup
    var popup = L.popup();

    function onMapClick(e) {
        popup.setLatLng([e.latlng.lat + 0.025, e.latlng.lng]).setContent(e.latlng.toString() + "<br><a href='javascript:void(0);' onclick='trigger_click_newEvent(" + e + ");'>Report Location</a>").openOn(map);

        // L.circleMarker([e.latlng.lat, e.latlng.lng], ownStyle).addTo(map).bindPopup("Your Location");
        // var mar = L.marker([e.latlng.lat, e.latlng.lng], {icon: blackIcon}).addTo(map).bindPopup("I am a red leaf.");
        var mar = L.marker(e.latlng, {
            icon: blackIcon
        }).addTo(map).bindPopup("I am a red leaf.");
    }
    map.on('click', onMapClick);

    function trigger_click_newEvent(e) {
        //console.log("Host Cleaning session for location ID - " + id);
        //  var date = prompt("Host Cleaning session for location ID - " + id, "DD/MM/YYYY");
        alert("Thanks for signing up on ");
        console.log(e);
        L.marker([e.latlng.lat, e.latlng.lng], {
            icon: blackIcon
        }).addTo(map).bindPopup("I am a red leaf.");
        console.log(e);

    }

    //     L.marker([lat+0.001, lon+0.001], {icon: blackIcon}).addTo(map).bindPopup("I am a red leaf.");

    var myLayer = L.geoJson(featureCollection, {
        onEachFeature: function display(feature, layer) {
            //    console.log(feature.properties.status);
            layer.bindPopup("<a id=a" + feature.properties.id + " href='javascript:void(0);' onclick='trigger_register_event(" + feature.properties.id + ");'>" + feature.properties.name + "</a><br>" + feature.properties.desc);

            if (feature.properties.status === 'green') {
                layer.setIcon(blueIcon);
            } else if (feature.properties.status === 'red') {
                layer.setIcon(redIcon);
            } else if (feature.properties.status === 'yellow') {
                layer.setIcon(yellowIcon);
            } else {
                layer.setIcon(blackIcon);
            }
        }
    });
    myLayer.addTo(map);

    function trigger_register_event(id) {
        //console.log("Host Cleaning session for location ID - " + id);
        var date = prompt("Host Cleaning session for location ID - " + id, "DD/MM/YYYY");
        alert("Thanks for signing up on " + date);

        //            $(function() {
        //                $("a" + id).datepicker();
        //            });
        //            $("a" + id).click();
        //document.getElementByID('mapdiv').style.display = 'block';
    }

    setTimeout(onEachFeature, 200);


    //   L.geoJson(featureCollection, onEachFeature : function (feature, layer) {
    //       layer.bindPopup(feature.properties.desc);
    //   }
    //    L.geoJson(featureCollection, {
    //        onEachFeature: onEachFeature 
    //    }).addTo(map);
    //    
    //    function onEachFeature(feature, layer) {
    //        if (feature.properties.name) {
    //            layer.bindPopup("<a id=a"+feature.properties.id+" href='javascript:void(0);' onclick='trigger_register_event(" + feature.properties.id + ");'>" + feature.properties.name + "</a><br>" + feature.properties.desc);
    //        }
    //    }


} catch (e) {
    // _procoding_throwError(e);
}
	
	//
	//
	// THIS WAS THE SECTION WHERE PROCODING INJECTED THE CANVAS SCRIPT
	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	
} catch (e) {
	_procoding_throwError(e);
}
