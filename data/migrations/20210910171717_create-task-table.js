
exports.up = function(knex) {
    return knex.schema
        .createTable('tasks', tbl => {
            tbl.increments('task_id')
            tbl.string('task_description', 128).notNullable()
            tbl.string('task_notes', 128)
            tbl.boolean('task_completed').defaultTo(false)
            tbl.integer('project_id').unsigned().notNullable().references('project_id').inTable('projects').onDelete('cascade').onUpdate('cascade')
        })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('tasks')
};
