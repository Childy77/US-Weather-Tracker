// Add eventlistener for button
// fetch weather url
// 


var APIKey = "793ec56b5b5da16e6e96c06afe923c74";
var city;
var inputEl = document.querySelector(".input");
var searchBtn = document.querySelector(".search-button");
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

var weatherURL =  "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + APIKey;

var forecastURL =  "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + APIKey;


// fetch(queryURL)
