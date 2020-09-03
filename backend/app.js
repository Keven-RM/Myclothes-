const express = require('express');
const app     = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}))

//BANCO DE DADOS

mongoose.connect('mongodb+srv://gs:2020grupo12@cluster0.r2zex.mongodb.net/Myclothes?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
    promiseLibrary: global.Promise
})

app.use(express.static('html'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',            require('./router/home.rota'));
app.use('/user',        require('./router/user.rota'));
app.use('/lista',       require('./router/lista.rota'));
app.use('/produto',     require('./router/produto.rota')); //visualização de um produto expecifico
app.use('/notificacoes',require('./router/mensagem.rota'));

app.listen(4000);

console.log('online');