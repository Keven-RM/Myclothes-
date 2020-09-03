var mensagem = require('../models/mensagem.model');

class MensagemController {
    mensagem_criar(){
    try{
    const criar_mensagem = mensagem.create()
    if(criar_mensagem) console.log('mensagem inserido')
    else console.log('falha ao adicionar')    
    }catch(error){
        console.log('mensagem não adcionado')
    }
    }

    mensagem_listar(){
        const listar_mensagem = mensagem.find()
    }

    mensagem_buscar(){
        const dados_mensagem = mensagem.findById()
    }

    mensagem_alterar(){
        const alterar_mensagem = mensagem.findByIdAndUpdate()
    }

    mensagem_remover(){
        const remover_mensagem = mensagem.findByIdAndRemove()
    }
}

module.exports = MensagemController;