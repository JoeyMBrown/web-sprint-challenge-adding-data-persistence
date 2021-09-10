
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_id: 1, project_name: 'Build Api', project_description: 'Build out API', project_completed: false},
        {project_id: 2, project_name: 'Twitter-Clone', project_description: 'Finish twitter-clone for friends', project_completed: false},
        {project_id: 3, project_name: 'Video game', project_description: 'Add leveling system', project_completed: true},
        {project_id: 4, project_name: 'Construction Work', project_description: 'Hire workers', project_completed: false},
        {project_id: 5, project_name: 'Lay Foundation', project_description: 'Lay the foundation duh', project_completed: true},
        {project_id: 6, project_name: 'Re-model Kitchen', project_description: 'Order new cabinets', project_completed: false},
        {project_id: 7, project_name: 'Dumpster dive', project_description: 'Find treasure', project_completed: true}
      ]);
    });
};
