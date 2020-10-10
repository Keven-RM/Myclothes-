const usuario = require('../models/user.model');

class UsuarioController{

async usuario_inserir(req, res){
    try{
        const usuario_inserido = await usuario.create(req.body)
        if(usuario_inserido) console.log('Usuario inserido  ' + req.body.nome)
        else console.log('falha ao adicionar')
    }catch(error){
        console.log(error)
        console.log('usuario não adcionado')
        }
}

async usuario_listar(req, res){
    try{
        const listar_usuario = await usuario.find({})
        return res.send({listar_usuario});
    }catch(error){
        console.log('não foi possivel listar os produtos')
        }
}

usuario_buscar(){
    const dados_usuario = usuario.findById()
}

usuario_alterar(){
    const aterar_usuario = usuario.findByIdAndUpdate()
}

usuario_remover(){
    const remover_usuario = usuario.findByIdAndRemove()
}

//Cartão
    cartao_inserir(req, res){
        const cartao_inserido = usuario.create(req.body)
    }

    cartao_listar(){
        const listar_cartao = usuario.find()
    }

    cartao_alterar(){
        const aterar_cartao = usuario.findByIdAndUpdate()
    }

    cartao_remover(){
        const remover_cartao = usuario.findByIdAndRemove()
    }

//Carrinho
    carrinho_listar(){
        const listar_carrinho = usuario.find()
    }

    carrinho_inserir(){
        const inserir_carrinho = usuario.create()
    }
    
    carrinho_remover(){
        const remover_carrinho = usuario.findByIdAndRemove()
    }
//Endereço
    endereco_inserir(req, res){
        const endereco_inserido = usuario.create(req.body)
    }

    endereco_listar(){
        const listar_endereco = usuario.find()
    }

    endereco_alterar(){
        const aterar_endereco = usuario.findByIdAndUpdate()
    }

    endereco_remover(){
        const remover_endereco = usuario.findByIdAndRemove()
    } 

}

module.exports = UsuarioController;