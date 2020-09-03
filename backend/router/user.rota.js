const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.controlador');
const itemcontroller = new controller();

//localhost:3000/api/listar
router.get('/', itemcontroller.usuario_listar);
//cartão
router.get('/cartao', itemcontroller.cartao_listar);
router.post('/cartao/inserir', itemcontroller.cartao_listar);
router.put('/cartao/alterar', itemcontroller.cartao_alterar);
router.delete('/cartao/delete', itemcontroller.cartao_remover);
//Carrinho
router.get('/carrinho', itemcontroller.carrinho_listar);
router.post('/carrinho/inserir', itemcontroller.carrinho_inserir);
router.delete('/carrinho/delete', itemcontroller.carrinho_remover);
//Endereço
router.get('/endereco', itemcontroller.endereco_listar);
router.post('/endereco/inserir', itemcontroller.endereco_inserir);
router.put('/endereco/alterar', itemcontroller.endereco_alterar);
router.delete('/endereco/delete', itemcontroller.carrinho_remover);
//Entrega
router.get('/carrinho', itemcontroller.carrinho_listar);
router.get('/carrinho', itemcontroller.carrinho_listar);
router.get('/carrinho', itemcontroller.carrinho_listar);
router.get('/carrinho', itemcontroller.carrinho_listar);

module.exports = router;