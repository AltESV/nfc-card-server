const express = require('express');
const app = express();
const router = require('./routes')

//ROUTES
app.use('/', router);


module.exports = app;
