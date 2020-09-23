var produto = require('../models/produto.model');

class ProdutoController {

    produto_inserir(req, res){
    try{
        const produto_inserido = produto.create(req.body)
    if(produto_inserido) console.log('produto inserido')
    else console.log('falha ao adicionar')    
    }catch(error){
        console.log('usuario não adcionado')
    }
    }

    produto_listar(){
        const listar_produto = produto.find();
    }

    produto_buscar(){
        const dados_produto = produto.findById()
    }
    
    produto_filtro(){
        const dados_produto = produto.findOne()
    }

    produto_aterar(){
        const aterar_produto = produto.findByIdAndUpdate()
    }

    produto_remover(){
        const remover_produto = produto.findByIdAndRemove()
    }
}

module.exports = ProdutoController;