var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mensagemSchema = new Schema({
    id:{type: String, require:true},
    urgente:{type: Boolean, default: false, require:true},
    visualizada:{type: Boolean, default: false, require:true},
    data:{type: Date, require:true},
    mensagem:{type: Date, require:true},
    FK_entrega:{type: Number},//fording key para vincular os dados da entrega
});

module.exports = mongoose.model('Mensagem', mensagemSchema, 'mensagem');