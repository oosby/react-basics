const express = require('express');
const path = require('path');
const cors = require('cors');
const users = require('./mocks/users');

const app = express();
app.use(cors())

app.get('/api/users-slow', (req, res) => {
  setTimeout(function() {
    res.json(users);
  }, 2000);
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/health', (req, res) => {
  res.status(200).send('healthy');
})


module.exports = app;
