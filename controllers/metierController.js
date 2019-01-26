const express = require('express');
const mongoose = require('mongoose');
const Metier = mongoose.model('Metier');
var router = express.Router();

router.get('/', (req, res) => {
    res.render("metier/addOrEdit", {
        viewTitle : "Insérer Metier"
    });
});

router.post('/', (req, res) => {
    insertRecord(req, res);
});

function insertRecord(req, res) {
    var metier = new Metier();

    metier.jobName = req.body.jobName;
    metier.codeNumber = req.body.codeNumber;

    metier.save((err, doc) => {
        if (!err)
            res.redirect('metier/list');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("metier/addOrEdit", {
                    viewTitle : "Insérer Metier",
                    metier : req.body
                })
            } else {
                console.log("Erreur lors de la sauvegarde d'insertion : " + err);
            }
        }
    });
}

router.get('/list', (req, res) => {
    //res.json('liste');
    Metier.find((err, docs) => {
        if (!err) {
            res.render("metier/list", {
                list: docs
            });
        } else {
            console.log("Impossible de trouver dans liste metier : " + err);
        }
    })
});

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'jobName':
                body['jobNameError'] = err.errors[field].message;
                break;
            case 'codeNumber':
                body['codeNumberError'] = err.errors[field].message;
                break;
            default:
                break;
            
        }
    }
}

module.exports = router;