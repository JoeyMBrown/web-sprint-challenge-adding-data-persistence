
exports.up = function(knex) {
    return knex.schema
        .createTable('project_resources', tbl => {
            tbl.increments('project_resource_id')
            tbl.integer('project_id').unsigned().notNullable().references('project_id').inTable('projects')
            tbl.integer('resource_id').unsigned().notNullable().references('resource_id').inTable('resources')
            tbl.integer('quantity').notNullable()
        })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('project_resources')
};