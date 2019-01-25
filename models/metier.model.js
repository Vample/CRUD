const mongoose = require('mongoose');

var metierSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    mobile: {
        type: String
    }
});

mongoose.model('Metier', metierSchema);