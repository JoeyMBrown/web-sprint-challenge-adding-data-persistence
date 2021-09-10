
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        {project_resource_id: 1, project_id: 1, resource_id: 3, quantity: 5},
        {project_resource_id: 2, project_id: 1, resource_id: 2, quantity: 1}, // Web api - using junior / senior dev
        {project_resource_id: 3, project_id: 2, resource_id: 1, quantity: 15},
        {project_resource_id: 4, project_id: 2, resource_id: 2, quantity: 3},  // Twitter clone - using junior / senior devs
        {project_resource_id: 5, project_id: 3, resource_id: 2, quantity: 5},  // Video game using 5 senior devs
        {project_resource_id: 6, project_id: 4, resource_id: 4, quantity: 20},  // Construction work using constructions workers
        {project_resource_id: 7, project_id: 5, resource_id: 7, quantity: 3}, 
        {project_resource_id: 8, project_id: 5, resource_id: 4, quantity: 15},// Lay foundation
        {project_resource_id: 9, project_id: 6, resource_id: 6, quantity: 1},  // DIY dad, kitchen
        {project_resource_id: 10, project_id: 7, resource_id: 5, quantity: 1},   // Dumpster dan, dumpster diving
      ]);
    });
};
