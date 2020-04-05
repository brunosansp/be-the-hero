
// método up é responsável por criar
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments(); // incrementa id automaticamente

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs'); //chave extrangeira
    })
};

// método down serve para desfazer algo
exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
