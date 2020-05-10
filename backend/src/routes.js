// importo todas as funcionalidades do express
const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

// Módulo de rotas do express
const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

// Isso é o que torna a rota visivel dentro da aplicação
module.exports = routes;