const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup Handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Tudor'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Tudor'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpMessage: 'Please help me :)',
    title: 'Help',
    name: 'Tudor'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    location: 'Cluj',
    forecast: 'Sunny right now! :)'
  })
})

app.get('*', (req, res) => {
  res.send('My 404 page')
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})