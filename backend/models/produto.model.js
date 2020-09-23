var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produtoSchema = new Schema({
    nome:{type: String, require:true},
    genero:{type: String, require:true, num:['masculino', 'feminino']},
    valor:{type: Number, require:true},
    tamanho:{type: String, require:true, num:['PP', 'P','M', 'G', 'GG', 'XGG']},
    estoque:{type: Number, require:true},
    marca:{type: String, require:true},
    cor:{type: String, require:true, enum:['preto', 'azul', 'vermelho', 'branco', 'amarelo', 'verde'] } ,
    descricao:{type: String, require:true}
});

module.exports = mongoose.model('Produto', produtoSchema, 'produto');