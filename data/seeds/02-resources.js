
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_id: 1, resource_name: 'Junior Developer', resource_description: 'A Developer with 0 experience (lord help us all)'},
        {resource_id: 2, resource_name: 'Senior Developer', resource_description: "A Developer who somewhat knows what he's doing"},
        {resource_id: 3, resource_name: 'Back-end Specialist', resource_description: 'Who is this guy?  Did you hire him?'},
        {resource_id: 4, resource_name: 'Construction Worker', resource_description: "Skilled laborer who knows what he's doing"},
        {resource_id: 5, resource_name: 'Dumpster Diving Captain', resource_description: 'THE best of the best when it comes to finding treasure'},
        {resource_id: 6, resource_name: 'DIY Dad', resource_description: 'Mandals, Beer, and a flashlight holding son at the ready'},
        {resource_id: 7, resource_name: 'Construction Supervisor', resource_description: 'Necessary on any job site'},
      ]);
    });
};
