const process = require('node:process')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const locationName = process.argv.length > 2 ? process.argv[2] : undefined

if (!locationName)
{
  return console.log('No location provided')
}

geocode(locationName, (error, {latitude, longitude, location} = {}) => {
  if (error)
  {
    return console.log(error)
  }
  
  forecast(latitude, longitude, (error, forecastData) => {
    if (error)
    {
      return console.log(error)
    }
    
    console.log(location)    
    console.log(forecastData)
  })
})