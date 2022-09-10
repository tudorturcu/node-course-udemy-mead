const http = require('http')
const https = require('https')

const url = 'http://api.weatherstack.com/current?access_key=aa0f28a1625bad0af2bf98857b2f70ef&query=46,23&units=f'

const request = http.request(url, (response) => {
  let data = ''
  
  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })

  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })
})

request.on('error', (error) => {
  console.log('An error', error)
})

request.end()