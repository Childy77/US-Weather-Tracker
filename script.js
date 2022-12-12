var APIKey = 793ec56b5b5da16e6e96c06afe923c74;
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)
