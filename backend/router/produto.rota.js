const express = require('express');
const router = express.Router();

const controller = require('../controllers/produto.controlador');
const itemcontroller = new controller();

const user = require('../controllers/user.controlador');
const usercontroller = new user();

//localhost:3000/api/product:idprouct
router.get('/listar', itemcontroller.produto_listar);//filtrar produtos e fazer listagem deles
router.get('/', itemcontroller.produto_buscar);//Ver produto especidico
router.post('/inserir', itemcontroller.produto_inserir);//Inserir no banco
router.get('/filtro', itemcontroller.produto_filtro);//Bucar produto de apartir de um filtro
router.post('/adicionar', usercontroller.carrinho_inserir);//adicionar o carrinho

module.exports = router;