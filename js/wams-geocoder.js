/**
© 2016 Stefan Pröll, Austria
*/
window.onload = function() {

    //     '{ "id":"", "name":"" , "address":", 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +

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
    '{ "id":"9", "name":"Recyclinginsel Schulgasse" , "address":"Schulgasse, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"10", "name":"MPreis Fischerhäuslweg 31" , "address":"Fischerhäuslweg 31, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"11", "name":"Pfarre Petrus Canisius" , "address":"Santifallerstraße 5,6020 Innsbruck Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"12", "name":"MPreis Bachlechnerstraße" , "address":"Bachlechnerstraße 46, 6020 Innsbruck" , "latitude":"", "longitude":"" },' +
    '{ "id":"13", "name":"Recyclinginsel, Reimmichlgasse" , "address":"Reimmichlgasse, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"14", "name":"Universitätssportinstitut USI" , "address":"Universitätssportinstitut USI, Fürstenweg 185, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"15", "name":"Recyclinginsel Rehgasse / Sieglangersteg" , "address":"Rehgasse 8, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"16", "name":"Wohnanlage Neue Heimat" , "address":"Wohnanlage Neue Heimat, Mitterweg 157, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"17", "name":"Wohnhaus Lohbachufer 1" , "address":"Wohnhaus Lohbachufer 1, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"18", "name":"Wohnheim Lohbach, Technikerstraße 84" , "address":"Wohnheim Lohbach, Technikerstraße 84, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"19", "name":"Recyclinginsel Gesetzbichlweg" , "address":"Gsetzbichlweg, Igls, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"20", "name":"Pfarre Kranebitten" , "address":"Pfarre Kranebitten, Klammstraße 5a, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"21", "name":"Recyclinginsel, Kajethan-Sweth-Straße" , "address":"Recyclinginsel, Kajethan-Sweth-Straße 14, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"22", "name":"Wohnanlage Neue Heimat, An-der-Lan-Str. " , "address":"Wohnanlage Neue Heimat, An-der-Lan-Str. 20, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"23", "name":"Wohnanlage Neue Heimat, Clemens-Holzmeister-Straße" , "address":"Clemens-Holzmeister-Straße, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"24", "name":"Caritas Integrationshaus" , "address":"Caritas Integrationshaus, Gumppstraße 71, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"25", "name":"Recclinginsel ggü. Pacherstraße 14" , "address":"Pacherstraße 14, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"26", "name":"Recyclinginsel, Tivoli NEU / gegenüber Olympiastraße 7" , "address":"Olympiastraße 7, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"27", "name":"Volksschule Leitgeb, Pradlerstraße" , "address":"Volksschule Leitgeb, Pradlerstraße, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"28", "name":"Wohnhaus Amraserstraße / Pradlerstraße 78" , "address":"Pradlerstraße 78, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"29", "name":"Wohnanlage Neue Heimat, Langstraße 31" , "address":"Langstraße 31, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"30", "name":"Wohnanlage Alpenländische Heimat, Karwendelstraße" , "address":"Karwendelstraße 13, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"31", "name":"Wohnanlage Neue Heimat, Körnerstraße" , "address":"Körnerstraße 19, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"32", "name":"Wohnanlage Neue Heimat, Türingstraße" , "address":"Türingstraße 12, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"33", "name":"Wohnanlage Neue Heimat, Gumppstraße" , "address":"Gumppstraße 27, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"34", "name":"Wohnanlage Neue Heimat, Mösslgasse" , "address":"Mösslgasse 19, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"35", "name":"Wohnanlage Neue Heimat, Bienerstraße 27" , "address":"Bienerstraße 27, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"36", "name":"Wohnanlage Neue Heimat, Pradler Saggen" , "address":"Wohnanlage Neue Heimat, Pradler Saggen 17, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"37", "name":"Wohnanlage Neue Heimat, Viktor-Dankl-Straße" ,"address":"Wohnanlage Neue Heimat, Viktor-Dankl-Straße 10, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"38", "name":"Pfarre St. Pirmin" , "address":"Pfarre St. Pirmin, Radetzkystraße 51, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"39", "name":"Recyclinghof, Rossau" , "address":"Roßaugasse 4a,6020 Innsbruck, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"40", "name":"Recyclinginsel, General-Eccher-Straße" , "address":"General-Eccher-Straße, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"41", "name":"Recyclinginsel, Radetzkystraße / Gutshofweg", "address":"Radetzkystraße 16, 6020 Innsbruck, Austria" , "latitude":"","longitude":"" },' +
    '{ "id":"42", "name":"Wohnanlage Neue Heimat,Andechstraße" , "address":"Wohnanlage Neue Heimat, Andechstraße 59, 6020 Innsbruck, Austria", "latitude":"", "longitude":"" },' +
    '{ "id":"43", "name":"Wohnanlage Neue Heimat, Klappholzstraße 44" , "address":"Klappholzstraße 44, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"44", "name":"Avanti Tankstelle Andechstraße" , "address":"Andechstraße 86, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"45", "name":"Flüchtlingsheim, Trientlgasse" , "address":"Trientlgasse 2, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"46", "name":"Pfarre Maria am Gestade" , "address":"Weingartnerstraße 44, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"47", "name":"Burgweg 1" , "address":"Burgweg 1, 6080 Inn, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"48", "name":"Stift Wilten" , "address":"Klostergasse 7, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" },' +
    '{ "id":"49", "name":"Recyclinginsel, Karmelitergasse / Liebeneggstraße" , "address":"Liebeneggstraße 15, 6020 Innsbruck, Austria" , "latitude":"", "longitude":"" }]}';

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
