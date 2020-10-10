var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nome:{type: String, require:true},
    email:{type: String, require:true},
    senha:{type: String, require:true}, 
    CPF:  {type: String, require:true}, //Adicionar limitador para 8 caracteres
    cartao:{type: String, require:true}, //Adicionar limitador para 16 caracteres
    endereco:[{
        cidade : String,
        rua : String,
        numero : String
         }],
    entrega:{type: Array, require:true},//Adicionar endereços dentro da variavel
    produtos_comprados:{ type : Array , default:[] }
})

module.exports = mongoose.model('Ususario', usuarioSchema, 'usuario');