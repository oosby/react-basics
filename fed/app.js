const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors())

app.use(express.static('build'));
console.log(process.env)

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('index', { USERS_API: process.env.USERS_API })
});

module.exports = app;
