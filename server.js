require('./models/database');

const express = require('express');

const path = require('path');
const exphdlbs = require('express-handlebars');

const metierController = require('./controllers/metierController');

var app = express();

app.listen(3000, () =>  {
    console.log('Server express a demarré sur le port : 3000');
});

app.use('/metier', metierController);