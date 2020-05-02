
exports.up = function(knex) {
    return  knex.schema.createTable('users', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('nickname').notNullable();
        table.string('email').notNullable();
        table.string('institution').notNullable();
        table.string('studentrecord').notNullable();
        
    });
};

exports.down = function(knex) {
    knex.schema.dropTable('users');
};
