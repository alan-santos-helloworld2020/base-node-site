const express = require('express');
const router =  express.Router();
var path = require('path');
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());
router.use(express.static(path.join(__dirname,'..','public')));


router.get('/',(req, res) => res.sendFile(path.join(__dirname,'../','views/index.html')));
router.get('/produtos',(req, res) => res.sendFile(path.join(__dirname,'../','views/produtos.html')));
router.get('/cadastro',(req, res) => res.sendFile(path.join(__dirname,'../','views/cadastro.html')));
router.get('/sobre',(req, res) => res.sendFile(path.join(__dirname,'../','views/sobre.html')));


// var caminho = path.join(__dirname,'../','views');
// console.log(caminho);


module.exports = router;
