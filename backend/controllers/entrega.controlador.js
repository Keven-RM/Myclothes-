const entrega = require('../models/entrega.model');

class EntregaController{
   entrega_inserir(req, res){
        const entrega_inserido = usuario.create(req.body)
    }

   entrega_listar(){
        const listar_cartao = usuario.find()
    }

   entrega_buscar(){
        const aterar_cartao = usuario.findById()
    }

   entrega_remover(){
        const remover_entrega = usuario.findByIdAndRemove()
    }
}

module.exports = EntregaController;