
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, tasks_id: 1, resources_id: 1, name: 'Project 1', description: 'some description for first.', completed: false},
        {id: 2, tasks_id: 2, resources_id: 2, name: 'Project 2', description: 'some description for second.', completed: false},
        {id: 3, tasks_id: 3, resources_id: 3, name: 'Project 3', description: 'some description for third.', completed: false}
      ]);
    });
};
