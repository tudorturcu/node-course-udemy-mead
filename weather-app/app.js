const request = require('postman-request')

// const url = 'http://api.weatherstack.com/current?access_key=aa0f28a1625bad0af2bf98857b2f70ef&query=37.8267,-122.4233&units=f'

// request({url:url, json: true}, (error, response, body) => {
//   if (error)
//   {
//     console.log('Unable to connect to weather service')
//   }
//   else 
//   {
//     if (body.error)
//     {
//       console.log('Unable to find location')
//     }
//     else
//     {
//       const description = body.current.weather_descriptions[0]
//       const temperature = body.current.temperature
//       const feelslike = body.current.feelslike
    
//       console.log(description + '. It is currently ' + temperature + ' Fahrenheit degrees out. It feels like ' + feelslike + ' Fahrenheit degrees out.')
//     }

//   }
// })

// Geocoding

const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidHVkb3J0dXJjdSIsImEiOiJjazhnOW9nNWUwMGc0M2VxcmVpMGw3OTV2In0.tQzBoqQu1X3_yXw9F4-V-g&limit=1'

request({url: mapboxUrl, json: true}, (error, response, body) => {
  if (error)
  {
    console.log('Unable to reach Mapbox Geocoding API')
  }
  else
  {
    if (body.features.length === 0)
    {
      console.log('No geocoding results matching the specified location')
    }
    else
    {
      const placeCenter = body.features[0].center
      const latitude = placeCenter[1]
      const longitude = placeCenter[0]
    
      console.log('Latitude is: ', latitude)
      console.log('Longitude is: ', longitude)
    }
  }
})