const express = require('express');
const path = require('path');

const rootDir = require('../util/rootDir');

const router = express.Router();

router.post('/novo', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

router.get('/novo', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'novoUsuario.htm'));
});

module.exports = router;