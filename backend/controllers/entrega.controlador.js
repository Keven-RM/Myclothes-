const entrega = require('../models/entrega.model');

class EntregaController{
    entrega_criar(req,res){
    try{
        const nova_entrega = entrega.create(req.body)
        if(nova_entrega) console.log('Entrega inserido')
        else console.log('falha ao adicionar')
    }catch(error){
        console.log('entrega não adcionado')
        }
    }
    entrega_listar(req,res){
        try{
        const listar_entrega = entrega.find({})
        if(listar_entrega)console.log('ok')
        else('erro no retorno')
    }catch(error){
        console.log('erro')}
    }

    entrega_buscar(req,res){
        const dados_entrega = usuario.findById(req.params.id)
    }

    entrega_remover(req,res){
        const remover_entrega = entrega.findOneAndRemove(req.params.id)
    }
}

module.exports = EntregaController;