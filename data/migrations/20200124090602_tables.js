
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();

      tbl.string('name', 255);

      tbl.string('description', 255);

      tbl.boolean('completed')
        .defaultTo(false);
  })
  .createTable('tasks', tbl => {
      tbl.increments();

      tbl.integer('project_id')
        .unsigned()
        .notNullabe()
        .references('id')
        .inTable('projects');

      tbl.string('description', 255)
        .index();

      tbl.string('notes', 255);
  
      tbl.boolean('completed')
        .defaultTo(false);
  })
  .createTable('resources', tbl => {
      tbl.increments();

      tbl.integer('project_id')
        .unsigned()
        .notNullabe()
        .references('id')
        .inTable('projects');

      tbl.string('name', 255);

      tbl.string('description', 255);
  })
  .createTable('project_dependancies', tbl => {
    tbl.increments();

    tbl.integer('project_id')
      .unsigned()
      .notNullabe()
      .references('id')
      .inTable('projects')
    
    tbl.integer('resources_id');
        .unsigned()
        .notNullabe()
        .references('id')
        .inTable('resources');
  })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('projects');
    knex.schema.dropTableIfExists('tasks');
    knex.schema.dropTableIfExists('resources');
    knex.schema.dropTableIfExists('project_dependancies');
};
