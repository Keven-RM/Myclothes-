const entrega = require('../models/entrega.model');

class EntregaController{
   entrega_inserir(req, res){
        const entrega_inserido = entrega.create(req.body)
    }

   entrega_listar(){
        const listar_cartao = entrega.find()
    }

   entrega_buscar(){
        const aterar_cartao = entrega.findById()
    }

   entrega_remover(){
        const remover_entrega = entrega.findByIdAndRemove()
    }
}

module.exports = EntregaController;