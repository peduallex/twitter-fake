const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const app = express();

//Real time
const server = require('http').Server(app)
const io = require('socket.io')(server)

//Conexão com o banco
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds121475.mlab.com:21475/goweek471', { useNewUrlParser: true });

//Intercepta todos os req's da aplicação
app.use((req, res, next) => {
   req.io = io;

   return next();
})
app.use(cors());
app.use(express.json())
app.use(require('./routes'));

server.listen(3000 ,() => {
  console.log('Servidor rodando na porta 3000');
});
