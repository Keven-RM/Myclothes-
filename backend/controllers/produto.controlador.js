const { json } = require('express');
var produto = require('../models/Produto.model');

class ProdutoController {

    async produto_inserir(req, res){
        try{
            const produto_inserido = await produto.create(req.body)
        if(produto_inserido) console.log('produto inserido: ' + req.body.nome)
        else console.log('falha ao adicionar')    
        }catch(error){
            console.log('usuario não adcionado')
        }
    }

    async produto_listar(req, res){
        try{
            const listar_produto = await produto.find({});
            return res.status(200).json(listar_produto);
        }catch(error){
            console.log('Não foi posivel listar: ' + listar_produto)
        }
    }


    async produto_buscar(req, res){
        const _id = req.params.id;
        
        const dados_produto = await produto.findById({_id})
        return res.status(200).json(dados_produto);
    };
    
    async produto_filtro(req, res){
        try{
            const dados_produto = await produto.find(req.query)
            return res.send({dados_produto});
        }catch(error){
            console.log('Não foi posivel buscar o produto ' + dados_produto)
        }

    }

    produto_aterar(req, res){
        const aterar_produto = produto.findByIdAndUpdate(req.body)
    }

    produto_remover(req, res){
        const remover_produto = produto.findByIdAndRemove(req.body)
    }
}

module.exports = ProdutoController;