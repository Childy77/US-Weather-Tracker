// Add eventlistener for button
// fetch weather url
// 


var APIKey = "793ec56b5b5da16e6e96c06afe923c74";
var city;
var searchBtn = document.querySelector(".search-button");


// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
function citySearch(event) {
    event.preventDefault()
    var inputEl = document.querySelector(".input");
    city = inputEl.value

var weatherURL =  "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;



// fetch(queryURL)

fetch(weatherURL)
.then(function(data) {
    return data.json()
})
.then(function(response) {
    $(".city").text(response.name);
    $(".current-date").text(dayjs.unix(response.dt).format("MM/DD/YYYY"));
    $(".weather-icon").attr("src", "http://openweathermap.org/img/wn/"+ response.weather[0].icon + "@2x.png");
    $(".temperature").text(response.main.temp);
    $(".humidty").text(response.main.humidity);
    $(".wind").text(response.wind.speed);
    console.log(response);
    
    var forecastURL =  "https://api.openweathermap.org/data/2.5/forecast?lat="+response.coord.lat+"&lon="+response.coord.lon+"&units=imperial&appid=" + APIKey;
    
    fetch(forecastURL)
    .then(function(data) {
        return data.json()
    })
    .then(function(response) {
        
        console.log(response);

        for (let i = 0; i < response.list.length; i+=8) {
            const dayForcast = response.list[i];
            $("#five-day").append('<div class="col days"><p class="day-1-date">'+dayjs.unix(dayForcast.dt).format("MM/DD/YYYY")+'</p><p class="day-1-icon"></p>Temp:<p class="day-1-temperature">'+dayForcast.main.temp+'</p>Humidity:<p class="day-1-humidity">'+dayForcast.main.humidity+'</p>Wind Speed:<p class="day-1-wind">'+dayForcast.wind.speed+'</p></div>')
            
        }
    })
})
}

searchBtn.addEventListener("click", citySearch);