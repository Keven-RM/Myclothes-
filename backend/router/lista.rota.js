const express = require('express');
const router = express.Router();

const controller = require('../controllers/produto.controlador');
const itemcontroller = new controller();

//localhost:3000/api/listar
router.get('/', itemcontroller.produto_listar);

//aplicar filtro na lista de produtos
router.get('/filtro/lacamentos', itemcontroller.produto_filtro);

//aplicar filtro na lista de produtos
router.get('/filtro/populares', itemcontroller.produto_filtro);

//aplicar filtro na lista de produtos
router.get('/filtro/marca', itemcontroller.produto_filtro);

//aplicar filtro na lista de produtos
router.get('/filtro/tamanho', itemcontroller.produto_filtro);

//aplicar filtro na lista de produtos
router.get('/filtro/cor', itemcontroller.produto_filtro);

//aplicar filtro na lista de produtos
router.get('/filtro/genero', itemcontroller.produto_filtro);


module.exports = router;