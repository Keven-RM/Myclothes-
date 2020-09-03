const express = require('express');
const router = express.Router();

const controller = require('../controllers/mensagem.controlador');
const itemcontroller = new controller();

//localhost:3000/api/menssagem
router.get('/',    itemcontroller.mensagem_listar);

router.get('/:id', itemcontroller.mensagem_buscar);

router.delete('/delete', itemcontroller.mensagem_remover);

module.exports = router;