const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.controlador');
const itemcontroller = new controller();

//localhost:3000/api/listar
router.get('/', itemcontroller.produto_listar);

module.exports = router;