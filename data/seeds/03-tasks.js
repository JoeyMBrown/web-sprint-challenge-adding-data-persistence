
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_id: 1, task_description: 'Layout end points', task_notes: 'Junior dev can do this', task_completed: false, project_id: 1}, //build API 1
        {task_id: 2, task_description: 'Create Middleware', task_notes: 'Need senior dev for middleware', task_completed: false, project_id: 1},
        {task_id: 3, task_description: 'Layout UI', task_notes: 'Junior dev work', task_completed: true, project_id: 2}, //Twitter Clone2
        {task_id: 4, task_description: 'Add functionality', task_notes: 'Senior dev needed', task_completed: true, project_id: 2},
        {task_id: 5, task_description: 'Add authentication', task_notes: "I don't think this will ever get done", task_completed: false, project_id: 2},
        {task_id: 6, task_description: 'Add leveling system', task_notes: 'Almost finished', task_completed: false, project_id: 3},  // Video game 3
        {task_id: 7, task_description: 'Create boss AI', task_notes: 'Senior dev task', task_completed: false, project_id: 3},
        {task_id: 8, task_description: 'Get estimate from customer', task_notes: 'Done', task_completed: true, project_id: 4}, // Construction work 4
        {task_id: 9, task_description: 'Request equipment from job site', task_notes: 'Need supervisor sign off', task_completed: false, project_id: 4},
        {task_id: 10, task_description: 'Collect money from customer', task_notes: 'Need supervisor', task_completed: false, project_id: 4},
        {task_id: 11, task_description: 'Lay the foundation dude', task_notes: 'Construction worker needed', task_completed: false, project_id: 5}, // Lay foundation 5
        {task_id: 12, task_description: 'Over spend on material', task_notes: 'DIY dad strikes again', task_completed: true, project_id: 6}, // Re-model Kitchen 6
        {task_id: 13, task_description: 'Complain about sons flashlight holding capabilities', task_notes: 'Stop crying youre shaking the light', task_completed: false, project_id: 6},
        {task_id: 14, task_description: 'Find the lost city of Atlantis', task_notes: 'Dumpster Diving Dave is incredible', task_completed: true, project_id: 7}, // Dumpster dive 7
      ]);
    });
};
