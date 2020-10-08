var produto = require('../models/Produto.model');

class ProdutoController {

    async produto_inserir(req, res){
    try{
        const produto_inserido = await produto.create(req.body)
    if(produto_inserido) console.log('produto inserido  ' + req.body.nome)
    else console.log('falha ao adicionar')    
    }catch(error){
        console.log('usuario não adcionado')
    }
    }

    async produto_listar(req, res){
        const listar_produto = await produto.find({'genero':'feminino'});
        return res.send({listar_produto});
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