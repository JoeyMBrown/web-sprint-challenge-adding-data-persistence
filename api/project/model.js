// build your `Project` model here
// build your `Resource` model here
const db = require('../../data/dbConfig');

async function getProjects() {
    const projectList = await db('projects').select('*')

    const newProjectList = projectList.map((project) => {
        if(project.project_completed) {
            project.project_completed = true;
            return project
        } else {
            project.project_completed = false;
            return project
        }
    })

    return newProjectList;
}

async function getProjectById(id) {
    console.log(id)
    const project = await db('projects')
        .select('*')
        .where('project_id', id)
        .first()

    if(project.project_completed) {
        project.project_completed = true;
        return project;
    } else {
        project.project_completed = false;
        return project;
    }
}

async function addProject(project) {
    const [id] = await db('projects').insert(project)

    return getProjectById(id)
}

module.exports = {
    getProjects,
    addProject
}