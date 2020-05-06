// importo todas as funcionalidades do express
const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

// Módulo de rotas do express
const routes = express.Router();

routes.get('/ongs', async (request, response) => 
{
	const ongs = await connection('ongs').select('*');
	return response.json(ongs);
});

routes.post('/ongs', async (request, response) => {
	const { name, email, whatsapp, city, uf } = request.body;

	const id = crypto.randomBytes(4).toString('HEX');

	await connection('ongs').insert({
		id, 
		name,
		email,
		whatsapp,
		city,
		uf,
	});
	
	return response.json( { id } );
});

// Isso é o que torna a rota visivel dentro da aplicação
module.exports = routes;
