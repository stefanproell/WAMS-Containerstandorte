/**
© 2016 Stefan Pröll, Austria
*/
        // Data for container locations
        var wamsData = '{"containerStandorte":[{"id":"1","name":"Pfarre Allerheiligen","address":"St.-Georgs-Weg 15, 6020, Innsbruck, Austria","latitude":47.2680316,"longitude":11.355563999999958},{"id":"2","name":"Endhaltestelle 3er Linie Amras","address":"Philippine-Welser-Straße 49, 6020, Innsbruck, Austria","latitude":47.2589929,"longitude":11.42600379999999},{"id":"3","name":"DEZ Einkaufszentrum Parkgarage","address":"Amraser-See-Straße 56a,6020 Innsbruck, Austria","latitude":47.2625925,"longitude":11.430842299999995},{"id":"4","name":"Wohnanlage Neue Heimat","address":"Geyrstraße 27-29, 6020 Innsbruck, Austria","latitude":47.2614899,"longitude":11.426765700000033},{"id":"5","name":"MPREIS Haller Straße","address":"Hallerstraße 212, 6020 Innsbruck, Austria","latitude":47.2769524,"longitude":11.442559599999981},{"id":"6","name":"Recyclinginsel Novapark","address":"Arzlerstraße 43, 6020 Innsbruck, Austria","latitude":47.2833947,"longitude":11.424273299999982},{"id":"7","name":"Höhenstraße / Hungerburg (neben Spar)","address":"Höhenstraße 125,6020 Innsbruck, 6020, Innsbruck, Austria","latitude":47.2841353,"longitude":11.394666799999982},{"id":"8","name":"Recyclinginsel Schneeburggasse","address":"Schneeburggasse 116, 6020 Innsbruck, Austria","latitude":47.2695889,"longitude":11.364059699999984},{"id":"9","name":"MPreis Fischerhäuslweg 31","address":"Fischerhäuslweg 31, 6020 Innsbruck, Austria","latitude":47.261875,"longitude":11.364496700000018},{"id":"10","name":"Pfarre Petrus Canisius","address":"Santifallerstraße 5,6020 Innsbruck Austria","latitude":47.2635626,"longitude":11.380990800000063},{"id":"11","name":"MPreis Bachlechnerstraße","address":"Bachlechnerstraße 46, 6020 Innsbruck","latitude":47.2645067,"longitude":11.376220800000056}]}';


        function initialize() {
          var innsbruck = { lat: 47.2656733, lng: 11.3941983 };
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: innsbruck
          });

          // Load Google Geocoder Library
          var geocoder = new google.maps.Geocoder();
          // Parse the data into a JSON
          var wamsJSON = JSON.parse(wamsData);
          // Iterate over all containers
          for(var i =0; i < wamsJSON.containerStandorte.length;i++){
              var container = wamsJSON.containerStandorte[i];
              placeMarkerOnMap(geocoder, map, container);
          };
        }

    // Custom marker
    var wamsLogo = {
      url: 'images/wams.png',
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(64, 64),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(64, 70)
    };

    // Define the shape for the marker
    var shape = {
      coords: [1, 1, 1, 64, 64, 64, 64, 1],
      type: 'poly'
    };

    // Place marker on the map
    function placeMarkerOnMap(geocoder, resultsMap, container) {
        // Create Google position object with latitude and longitude from the container object
        var positionLatLng = new google.maps.LatLng(parseFloat(container.latitude),parseFloat(container.longitude));
        // Create marker with the position, logo and address
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: positionLatLng,
          icon: wamsLogo,
          shape: shape,
          title: container.address,
          animation: google.maps.Animation.DROP
        });
    }
    // Place marker on the map
    google.maps.event.addDomListener(window, 'load', initialize);
