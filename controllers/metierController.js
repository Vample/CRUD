const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render("metier/addOrEdit", {
        viewTitle : "Insérer Metier"
    });
});

router.post('/', (req, res) => {
    console.log(req.body)
});

module.exports = router;