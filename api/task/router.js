// build your `/api/tasks` router here
const express = require('express');

const router = express.Router();
const Tasks = require('./model');
const { checkTaskBody, checkProjectId } = require('./middleware');

router.get('/', (req, res, next) => {
    Tasks.getTasks()
        .then((tasks) => {
            res.status(200).json(tasks)
        })
        .catch(next)
})

router.post('/', checkTaskBody, checkProjectId, (req, res, next) => {
    Tasks.addTask(req.body)
        .then((task) => {
            res.status(200).json(task)
        })
        .catch(next)
})

router.use((err, req, res, next) => { 
    res.status(err.status || 500).json({
      message: err.message
    })
  })


module.exports = router;