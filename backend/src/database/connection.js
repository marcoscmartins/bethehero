    // import do knex
const knex = require('knex');
// import das configurações do DB
const configuration = require('../../knexfile');

// criação da conexão utiliando o knex e passando o configuration.development
const connection = knex(configuration.development);

module.exports = connection;