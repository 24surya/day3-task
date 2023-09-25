var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result = JSON.parse(request.response);
    for (var country of result) {
        console.log(country.flags.svg);
    }
};
