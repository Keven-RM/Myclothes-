var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mensagemSchema = new Schema({
    id:{type: String, require:true},
    urgente:{type: Boolean, default: false, require:true},
    visualizada:{type: Boolean, default: false, require:true},
    data:{type: Date, require:true},
    autor:{type: String, require:true},
    mensagem:{type: Date, require:true}
});

module.exports = mongoose.model('Mensagem', mensagemSchema, 'mensagem');