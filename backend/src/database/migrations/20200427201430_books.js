
exports.up = function(knex) {
    return  knex.schema.createTable('books', function(table){
        table.increments();

        table.string('title').notNullable();
        table.string('theme').notNullable();
        table.string('edition').notNullable();
        table.string('year').notNullable();
        table.string('pages').notNullable();
        table.string('synopsis').notNullable();
        table.string('city').notNullable();
        table.string('uf').notNullable();

        table.string('user_id').notNullable();

        table.foreign('user_id').references('id').inTable('users');
    
  });
};

exports.down = function(knex) {
    knex.schema.dropTable('books');
};
