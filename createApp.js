const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const data = require('./data.json')

const app = express()
const staticPath = path.join(__dirname, './build')
app.use(bodyParser.json())
app.use(express.static(staticPath))
app.get('/data', (req, res) => {
  res.json(data)
})

module.exports = app
