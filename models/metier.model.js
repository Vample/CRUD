const mongoose = require('mongoose');

var metierSchema = new mongoose.Schema({
    jobName: {
        type: String
    },
    codeNumber: {
        type: String
    }
});

mongoose.model('Metier', metierSchema);