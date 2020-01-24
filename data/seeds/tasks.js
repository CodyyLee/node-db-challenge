
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, project_id: 1, description: 'some discription of task one.', notes: 'some notes for the first.', completed: false},
        {id: 2, project_id: 2, description: 'some description of task two.', notes: 'some notes for the second.', completed: false},
        {id: 3, project_id: 3, description: 'some description of task three.', notes: 'some notes for the third.', completed: false}
      ]);
    });
};
