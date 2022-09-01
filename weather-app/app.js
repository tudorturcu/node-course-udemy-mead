const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=aa0f28a1625bad0af2bf98857b2f70ef&query=37.8267,-122.4233'

request(url, (error, response, body) => {
  const data = JSON.parse(body)
  console.log(data.current)
})