
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Resource One', project_id: 1, description: 'description for the first resource'},
        {id: 2, project_id: 2, name: 'Resource Two', description: 'description for the second resource.'},
        {id: 3, project_id: 3, name: 'Resource Three', description: 'description for the third resource.'}
      ]);
    });
};
