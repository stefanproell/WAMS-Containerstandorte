/**
© 2016 Stefan Pröll, Austria
*/
window.onload = function() {

    // Data
    var wamsData = '{ "containerStandorte" : [' +
    '{ "id":"1", "name":"Pfarre Allerheiligen" , "address":"St.-Georgs-Weg 15, 6020, Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"2", "name":"Endhaltestelle 3er Linie Amras" , "address":"Philippine-Welser-Straße 49, 6020, Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"3", "name":"DEZ Einkaufszentrum Parkgarage" , "address":"Amraser-See-Straße 56a,6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"4", "name":"Wohnanlage Neue Heimat" , "address":"Geyrstraße 27-29, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"5", "name":"MPREIS Haller Straße" , "address":"Hallerstraße 212, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"6", "name":"Recyclinginsel Novapark" , "address":"Arzlerstraße 43, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"7", "name":"Höhenstraße / Hungerburg (neben Spar)" , "address":"Höhenstraße 125,6020 Innsbruck, 6020, Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"8", "name":"Recyclinginsel Schneeburggasse" , "address":"Schneeburggasse 116, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"9", "name":"MPreis Fischerhäuslweg 31" , "address":"Fischerhäuslweg 31, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"10", "name":"Pfarre Petrus Canisius" , "address":"Santifallerstraße 5,6020 Innsbruck Austria" , "latitude":"", "longitude":"" },' +

    '{ "id":"11", "name":"MPreis Bachlechnerstraße" , "address":"Bachlechnerstraße 46, 6020 Innsbruck" , "latitude":"", "longitude":"" }'
    +' ]}';

    // Google Geocoder Library
    var geocoder = new google.maps.Geocoder();
    // Parse the JSON string into a javascript object.
    var wamsJSON = JSON.parse(wamsData);


    /**
        Iterate over containers and retrieve the geo location for their address.
    */
    function processContainers(){
        // Store amount of containers
        var amountOfContainers = wamsJSON.containerStandorte.length;
        // Iterate over all containers
        for (var i=0;i<amountOfContainers;i++){
            var container = wamsJSON.containerStandorte[i];
            // Encode the address of the container
            geocodeAddress(container, processContainerLocationCallback);
        };
    };

    /**
        Process the results
    */
    function processContainerLocationCallback(container,lat,long){
        wamsJSON = updateJSON(container,lat,long, printJSONCallback);
    }

    /**
        Update the JSON object and store the latitude and longitude information
    */
    function updateJSON(container,lat,long,printJSONCallback){
        // Store amount of containers
        var amountOfContainers = wamsJSON.containerStandorte.length;
        // Iterate over containers
        for (var i=0;i<amountOfContainers;i++){
            // Pick the correct id and store the data
            if(wamsJSON.containerStandorte[i].id==container.id){
                wamsJSON.containerStandorte[i].latitude=lat;
                wamsJSON.containerStandorte[i].longitude=long;
            }
        };
        // When the update is done, call the displayCallback
        printJSONCallback();
        return wamsJSON;
    };

    /*
        Google's Geocoder function takes and address as input and retrieves
        (among other data) the latitude and longitude of the provided address.
        Note that this is an asynchronous call, the response may take some time.
        Also remember that the processContainerLocationCallback which is given as
        an input parameter is just a variable. A variable which happens to be a function.

    */
    function geocodeAddress(container, processContainerLocationCallback){
        var address = container.address;
        geocoder.geocode( { 'address': address}, function(results, status) {
            // Anonymous function to process results.
            if (status == google.maps.GeocoderStatus.OK) {
                lat=results[0].geometry.location.lat();
                long=results[0].geometry.location.lng();
                // When the results have been retrieved,process them in the function processContainerLocationCallback
                processContainerLocationCallback(container, lat,long);
            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });
    };

    // Print the result
    function printJSONCallback(){
        var jsonString = escapeString(JSON.stringify(wamsJSON, null,4));
        console.log(jsonString);
        document.getElementById("jsonOutput").innerHTML = jsonString;
    }


    // Escape the JSON String
    function escapeString(jsonString){
        //console.log("Input " + jsonString );

        //var escapedJSONString = jsonString.replace(/"/g, '\\"');
        //var escapedJSONString = jsonString.replace(/\n/g, '\'+\'');
        var escapedJSONString = jsonString
        console.log("Output " + escapedJSONString );

        return escapedJSONString;

    }

    // Start processing
    processContainers();
}
