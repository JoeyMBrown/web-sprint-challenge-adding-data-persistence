// build your `Project` model here
const db = require('../../data/dbConfig');

async function getProjects() {
    const projectList = await db('projects').select('*')

    const newProjectList = projectList.map((project) => convertToBoolean(project))

    return newProjectList;
}

async function getProjectById(id) {
    const project = await db('projects')
        .select('*')
        .where('project_id', id)
        .first()

        if(project) {
            return convertToBoolean(project)
        } else {
            return null;
        }
}

async function addProject(project) {
    const [id] = await db('projects').insert(project)

    return getProjectById(id)
}

function convertToBoolean(project) {
    if(project.project_completed) {
        project.project_completed = true;
        return project;
    } else {
        project.project_completed = false;
        return project;
    }
}

module.exports = {
    getProjects,
    addProject,
    getProjectById
}