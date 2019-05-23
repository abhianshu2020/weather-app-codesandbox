const request = require("request");

const url =
  "https://api.darksky.net/forecast/ba7df1f8860f78113ce7aa332ab57913/37.8267,-122.4233?units=si&lang=en";

request({ url: url, json: true }, (error, response) => {
  // when json:true is not passed, we have to manually parse the response
  //const data = JSON.parse(response.body)
  //console.log(data)

  // If json:true it automatically parses the response
  //console.log(response.body.currently);

  console.log(
    response.body.daily.data[0].summary +
      " It is currently " +
      response.body.currently.temperature +
      " degrees out there. There is a " +
      response.body.currently.precipProbability +
      "% chance of rain."
  );
});

// Geocoding
// Address => lat/long => weather

// Challenge: Create a new request and get the lat/long of the locastion
const testGeoUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWJoaXNoZWthbnNodSIsImEiOiJjancwOHRkZ3YwN3VoM3ludnd5ang0am9vIn0.n4iRj4C69IVLK_i2Ni-aAQ";
request({ url: testGeoUrl, json: true }, (error, res) => {
  console.log(res.body.features[0].text);
  const latitude = res.body.features[0].center[1];
  const longitude = res.body.features[0].center[0];
  console.log(latitude, longitude);
});
