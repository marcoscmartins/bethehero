// importo todas as funcionalidades do express
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

// variável que armazena a minha aplicação
// instancio a minha aplicação
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


// minha aplicação ouve à porta 3333
app.listen(3333);