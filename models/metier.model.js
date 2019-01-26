const mongoose = require('mongoose');

var metierSchema = new mongoose.Schema({
    jobName: {
        type: String,
        required: 'Ce champs est obligatoire.'
    },
    codeNumber: {
        type: String,
        required: 'Ce champs est obligatoire.'
    }
});

mongoose.model('Metier', metierSchema);