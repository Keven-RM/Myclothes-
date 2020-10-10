const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.controlador');
const itemcontroller = new controller();

const entregacontroller = require('../controllers/entrega.controlador');
const controllerentrega = new entregacontroller();

//localhost:3000/api/listar
router.get('/', itemcontroller.usuario_listar);
//localhost:3000/api/inserir
router.post('/inserir', itemcontroller.usuario_inserir);
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
router.get('/entrega', controllerentrega.entrega_listar);
router.get('/entrega/inserir', controllerentrega.entrega_inserir);
router.get('/entrega/buscar', controllerentrega.entrega_buscar);
router.get('/entrega/remover', controllerentrega.entrega_remover);

module.exports = router;