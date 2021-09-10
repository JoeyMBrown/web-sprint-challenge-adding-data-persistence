// build your `/api/projects` router here
const express = require('express');

const router = express.Router();
const Projects = require('./model');
const { checkProjectBody } = require('./middleware');

router.get('/', (req, res, next) => {
    Projects.getProjects()
        .then((projects) => {
            res.status(200).json(projects)
        })
        .catch(next)
})

router.post('/', checkProjectBody, (req, res, next) => {
    Projects.addProject(req.body)
        .then((project) => {
            res.status(200).json(project)
        })
        .catch(next)
})

module.exports = router;