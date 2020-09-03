const usuario = require('../models/user.model');

class UsuarioController{

usuario_inserir(req, res){
    try{
        const usuario_inserido = usuario.create(req.body)
        if(usuario_inserido) console.log('usuario inserido')
        else console.log('falha ao adicionar')
    }catch(error){
        console.log('usuario não adcionado')
        }
}

usuario_listar(){
    const listar_usuario = usuario.find()
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

 
//Entrega
    entrega_inserir(req, res){
        const entrega_inserida = usuario.create(req.body)
    }

    entrega_listar(){
        const listar_entrega = usuario.find()
    }

    entrega_alterar(){
        const aterar_entrega = usuario.findByIdAndUpdate()
    }

    entrega_remover(){
        const remover_entrega = usuario.findByIdAndRemove()
    }

//Mensagem
    mensagem_inserir(req, res){
        const mensagem_inserida = usuario.create(req.body)
    }

    mensagem_listar(){
        const listar_mensagem = usuario.find()
    }

    mensagem_buscar(){
        const buscar_mensagem = usuario.findById()
    }

    mensagem_remover(){
        const remover_mensagem = usuario.findByIdAndRemove()
    }

}

module.exports = UsuarioController;