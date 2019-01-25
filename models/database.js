const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27018/MetierDB', {useNewUrlParser: true}, (err) => {
    if (!err) {console.log('Connection mongodb reussie.')}
    else {console.log('Erreur dans la connexion a la db: ', + err)}
});

require('./metier.model');