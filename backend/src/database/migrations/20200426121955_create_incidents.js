exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {  
        // define o id como chave primária  autoincrement
        table.increments();
    
        table.string('title').notNullable(); 
        table.string('description').notNullable();  
        table.decimal('value').notNullable(); 
        
        table.string('ong_id').notNullable();
    
        // chave estrangeira
        table.foreign('ond_ig').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};