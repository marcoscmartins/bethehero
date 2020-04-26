
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table) { 
        // define o id como chave primária 
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable(); 
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        // o segundo parâmetro representa a qtd de caracteres que o campo vai permitir 
        table.string('uf', 2).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
