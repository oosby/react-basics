const express = require('express');
const path = require('path');
const cors = require('cors');
const http = require('http');

let users = [];
const app = express();
app.use(cors())

app.use(express.static('build'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

http.get(`http://${process.env.USERS_API}/api/users`, res => {
  let rawData = '';
  res.on('data', chunk => rawData += chunk);
  res.on('end', () => {
    try {
      users = JSON.parse(rawData);
    } catch(e) {
      console.log(e)
    }
  });
})

app.get('/', (req, res) => {
  res.render('index', { users: JSON.stringify(users) });
});

module.exports = app;
