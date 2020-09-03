var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entregaSchema = new Schema({
    data_pedido:   {type: Date, require:true},
    data_envio:    {type: Date, require:true},
    valor:         {type: Number, require:true},
    tempo_estimado:{type: Date, require:true},
    status:        {type: String, require:true, enum:['pendente', 'entrege'] },
});

module.exports = mongoose.model('Entrega', entregaSchema, 'entrega');