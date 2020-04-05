// importo todas as funcionalidades do express
const express = require('express');

// variável que armazena a minha aplicação
// instancio a minha aplicação
const app = express();

// app.get('/', (request, response) => {
// 	return response.send('Hello World');
// });

app.get('/', (request, response) => {
	return response.json({
		evento: 'Semana OmniStack 11.0',
		aluno: 'Marcos Cardoso'
	});
});

// minha aplicação ouve à porta 3333
app.listen(3333);

