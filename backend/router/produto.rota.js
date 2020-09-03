const express = require('express');
const router = express.Router();

const controller = require('../controllers/produto.controlador');
const itemcontroller = new controller();

const user = require('../controllers/user.controlador');
const usercontroller = new user();

//localhost:3000/api/product:idprouct
router.get('/:id', itemcontroller.produto_buscar);

//localhost:3000/api/product:idprouct 
router.post('/adicionar', usercontroller.carrinho_inserir);//adicionar o carrinho

module.exports = router;