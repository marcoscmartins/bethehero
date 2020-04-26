// importo todas as funcionalidades do express
const express = require('express');
const routes = require('./routes');

// variável que armazena a minha aplicação
// instancio a minha aplicação
const app = express();

app.use(express.json());
app.use(routes);


// minha aplicação ouve à porta 3333
app.listen(3333);