const express = require('express');

const rootDir = require('../util/rootDir');

const router = express.Router();

router.post('/usuario/novo', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

router.get('/usuario/novo', (req, res, next) => {
    res.sendFile(rootDir+'/views/novoUsuario.htm');
});

module.exports = router;