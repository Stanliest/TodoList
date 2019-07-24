'use strict'

const cors = require('cors');
const express = require('express');
var bodyParser = require('body-parser');

const port = process.env.PORT || 4000;
const app = express();
const todoRoute = require('./routes/todoRoute');
const mongoose = require("mongoose");

// connect to database
mongoose.connect('mongodb://localhost:27017/todo', {
  useNewUrlParser: true
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + port)
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  // Pass to next layer of middleware
  next()
});
app.use('/api', todoRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);
