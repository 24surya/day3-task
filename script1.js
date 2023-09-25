var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function () {
    if (request.status === 200) {
        var result = JSON.parse(request.response);

        for (var countryIndex in result) {
            var country = result[countryIndex];
            console.log("Country Name: " + country.name);
            console.log("Region: " + country.region);
            console.log("Sub-region: " + country.subregion);
            console.log("Population: " + country.population);
            console.log("-----------------------------------------");
        }
    } else {
        console.error("Failed to fetch data from the API.");
    }
};
