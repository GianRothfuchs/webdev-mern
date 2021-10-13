// backend framework
const express = require('express')
// for interaction with mongodb
const mongoose = require('mongoose')
// helps to parse requests
const bodyParser = require('body-parser')

const items = require('./routes/api/items')

const app = express()

// Bodyparser Middleware
app.use(bodyParser.json())

// DB config from config/keys.js file
const db = require('./config/keys').mongoURI

// Connect to Mongo (return a promise, use .then)
mongoose
  .connect(dp)
  .then(() => console.log('Mongo DB Connected'))
  .catch((err) => console.log(err))

// User Routes
app.use('/api/items', items)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))
