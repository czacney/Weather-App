// //city function & info
// $('city-input').click(function(event) {
//   event.preventDefault();

  var city = $("#city-input").val();

  var api = "&appid=d3c1fbf5aabfb623111efe9575a4241d";
  
  
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + api;


  $.ajax({
    url: queryURL,
    method: "GET"
  })
  
  .then(function (response) {
  // console.log(response);
  $(".city").text(response.name);
  $(".wind").text("Wind Speed: " + response.wind.speed);
  $(".humidity").text("Humidity: " + response.main.humidity);
  $(".temp").text("Temperature (F) " + response.main.temp);


  // Converts the temp to Kelvin with the below formula
  var tempF = (response.main.temp - 273.15) * 1.80 + 32;
  $(".tempF").text("Temperature (Kelvin) " + tempF);

// var lon = response.coord.lon;
// var lat = response.coord.lat;
// UVIndex(lon,lat);

});