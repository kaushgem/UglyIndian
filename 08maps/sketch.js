try {

    try {
        
        var lon = 80.22525787353516;
        var lat = 13.082153590400935;
        var zoom = 12;

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

        // Showing a location
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

        function getLocation() {
            navigator.geolocation.getCurrentPosition(receiveLocation,
            errorGettingLocation, {
                timeout: 5000
            });
        }

        // Get coordinates and popup
        var popup = L.popup();

        function onMapClick(e) {
            popup.setLatLng(e.latlng).setContent(e.latlng.toString() + "<br><a href='javascript:void(0);' onclick='trigger_click_newEvent(" + e + ");'>Report Location</a>").openOn(map);
        }
        map.on('click', onMapClick);

        function trigger_click_newEvent(e) {
            console.log(e);
            alert("New Event Triggered for " + e);
        }


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
                    layer.setIcon(redIcon);
                }

            }
        });
        myLayer.addTo(map);

        function trigger_register_event(id) {
            //console.log("Host Cleaning session for location ID - " + id);
            prompt("Host Cleaning session for location ID - " + id, "");
        }


    } catch (e) {
        // _procoding_throwError(e);
    }

} catch (e) {
    _procoding_throwError(e);
}