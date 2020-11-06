const usuario = require('../models/user.model');
class UsuarioController{

async usuario_inserir(req, res){
        const email  = req.body.email
    
    try{
        if(await usuario.findOne({email})){
            return res.status(400).send('Usuario já existe')
        }
        
        const usuario_inserido = await usuario.create(req.body) 

        if(usuario_inserido){
            return res.status(200).send('Sua conta foi criada') 
        }else console.log('falha ao adicionar')

    }catch(error){
        console.log(error)
        console.log('usuario '+ req.body.nome+' não adcionado')
        }
}

    async usuario_listar(req, res){
        try{
            const listar_usuario = await usuario.find({})
            return res.status(200).send(listar_usuario)
        }catch(error){
            console.log('não foi possivel listar os produtos')
            }
        }

    //AUTENTICAR
    async usuario_autenticar(req, res){
        try{
            const email_usuario  = req.body.email
            const senha_usuario = req.body.senha
            const resultado = await usuario.findOne({email: email_usuario, senha: senha_usuario})

            if(resultado){
            return res.send(true)
            }else{
                return res.send(false)
            }

        }catch(error){
            console.log(error)
        }
    }

    async usuario_buscar(req, res){
        const user_email = req.params.email;
        
        const dados_produto = await usuario.findOne({email: user_email})
        return res.status(200).json(dados_produto);
    };

    async usuario_alterar_senha(req, res){
            await usuario.findOneAndUpdate({email: req.params.email}, {senha: req.params.senha}, {
                new: true
            });
        return res.status(200).send('criado')
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

    async carrinho_inserir(req, res){
        console.log(req.params.id)
            const inserir_carrinho = await usuario.findOneAndUpdate({email: req.params.email} , {$push: {produtos_comprados:req.params.id} }, {
            new: true
        });
        return res.status(201).send(`Produto comprodado:${inserir_carrinho.produtos_comprados} por - ${req.params.email}`)
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