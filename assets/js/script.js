// variable to get city name from search box
const cityName = document.getElementById("cityName");
// variable for API Key
const key = "f27da051d1bb049cdcc33ee252c8cec2";

document.getElementById("searchBtn").addEventListener("click", firstCall);

console.log(cityName)

function lastCity() {
    var lastCity = localStorage.getItem("cityName");
}
// function to get current weather conditions
function firstCall() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=sandy&units=imperial&appid=" + key)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("currentCity").textContent += data.name,
                document.getElementById("currentTemp").textContent += ("Temperature: ") + data.main.temp + (" F"),
                document.getElementById("currentWind").textContent += ("Wind: ") + data.wind.speed + (" MPH")
            document.getElementById("currentHum").textContent += ("Humidity: ") + data.main.humidity + (" %")
            var getweather = (data.coord)
            console.log(getweather)
            console.log(data)
        })
}
// function to get 5 day forecast
function getweather(lat, lon) {

    fetch("https://api.openweathermap.org/data/3.0/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + key)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            console.log(data)
        })

    localStorage.setItem("cityName", lastCity);

}





// firstCall(); // run this in an event listener with the city the user searches for