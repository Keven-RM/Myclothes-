const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.controlador');
const itemcontroller = new controller();

const entregacontroller = require('../controllers/entrega.controlador');
const controllerentrega = new entregacontroller();

//localhost:3000/api/listar
router.post('/inserir', itemcontroller.usuario_inserir);
router.get('/listar', itemcontroller.usuario_listar);
router.get('/:email', itemcontroller.usuario_buscar);
router.post('/autenticar', itemcontroller.usuario_autenticar);

//alterar infos do usuario
router.post('/senha/alterar/:email/:senha', itemcontroller.usuario_alterar_senha);
router.post('/cpf/alterar/:email/:cpf', itemcontroller.usuario_alterar_cpf);

//cartão
router.post('/cartao/inserir/:email/:cartao', itemcontroller.cartao_inserir);
router.put('/cartao/alterar', itemcontroller.cartao_alterar);
router.delete('/cartao/delete', itemcontroller.cartao_remover);
//Carrinho
router.get('/carrinho', itemcontroller.carrinho_listar);
router.post('/carrinho/inserir/:email/:id', itemcontroller.carrinho_inserir);
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