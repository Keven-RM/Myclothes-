const express = require('express');
const router = express.Router();

//localhost:3000/api/listar
router.get('/home', function(req, res) {
    res.sendFile('inserir.html');
  });


module.exports = router;