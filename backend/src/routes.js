// importo todas as funcionalidades do express
const express = require('express');

// Módulo de rotas do express
const routes = express.Router();

routes.post('/users', (request, response) => {
	const body = request.body;
	console.log(body);

	return response.json({
		evento: 'Semana OmniStack 11.0',
		aluno: 'Marcos Cardoso Martins'
	});
});

// Isso é o que torna a rota visivel dentro da aplicação
module.exports = routes;