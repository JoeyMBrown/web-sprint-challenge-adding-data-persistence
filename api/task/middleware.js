const Projects = require('../project/model');

const checkTaskBody = (req, res, next) => {
    console.log(req.body)
    if(!req.body.task_description || typeof req.body.task_description !== 'string') {
        next({ message: 'Bad request, check task_description property, and project_id property.', status: 400})
    } else { 
        next()
    }
}

const checkProjectId = (req, res, next) => {
    const { project_id } = req.body

    Projects.getProjectById(project_id)
        .then((project) => {
            if(project) {
                next()
            } else {
                next({message: 'No project exists with given ID', status: 400})
            }
        })
        .catch(next);
}

module.exports = {
    checkTaskBody,
    checkProjectId
}