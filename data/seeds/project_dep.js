
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, project_id: 1, tasks_id: [1, 2], resources_id: 1},
        {id: 2, project_id: 1, resources_id: 2}
      ]);
    });
};
