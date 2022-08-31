const fs = require('fs')

const fileBuffer = fs.readFileSync('1-json.json')

const data = JSON.parse(fileBuffer.toString())
data.name = 'Tudor'
data.age = 30

const newData = JSON.stringify(data)
fs.writeFileSync('1-json.json', newData)
