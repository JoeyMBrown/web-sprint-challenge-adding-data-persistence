// build your `/api/resources` router here
const express = require('express');

const router = express.Router();
const Resources = require('./model');
const { checkResourceBody } = require('./middleware');

router.get('/', (req, res, next) => {
    Resources.getResources()
        .then((resources) => {
            res.status(200).json(resources)
        })
        .catch(next)
})

router.post('/', checkResourceBody, (req, res, next) => {
    Resources.addResource(req.body)
      .then((resource) => {
        res.status(201).json(resource)
      })
      .catch(next)
})

router.use((err, req, res, next) => { 
    res.status(err.status || 500).json({
      message: err.message
    })
  })

module.exports = router;