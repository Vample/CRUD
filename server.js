require('./models/database');

const express = require('express');

const path = require('path');
const exphdlbs = require('express-handlebars');

const metierController = require('./controllers/metierController');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, './views'));
app.engine('hbs', exphdlbs({extname: 'hbs', defaultLayout: 'mainLayout', layoutDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');
app.listen(3000, () =>  {
    console.log('Server express a demarré sur le port : 3000');
});

app.use('/metier', metierController);