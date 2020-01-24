
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();

      tbl.string('name', 255);

      tbl.string('description', 255);

      tbl.boolean('completed')
        .defaultTo(false);

      tbl.integer('tasks_id');
      
      tbl.integer('resources_id');
  })
  .createTable('tasks', tbl => {
      tbl.increments();

      tbl.integer('project_id')

      tbl.string('description', 255)
        .index();

      tbl.string('notes', 255);

      tbl.boolean('completed')
        .defaultTo(false);
  })
  .createTable('resources', tbl => {
      tbl.increments();

      tbl.integer('project_id');

      tbl.string('name', 255);

      tbl.string('description', 255);
  })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('projects');
    knex.schema.dropTableIfExists('tasks');
    knex.schema.dropTableIfExists('resources');
};
