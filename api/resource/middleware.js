const checkResourceBody = (req, res, next) => {
    if(!req.body.resource_name || typeof req.body.resource_name !== 'string') {
        next({ message: 'Bad request, check resource_name property.', status: 400})
    } else { 
        next()
    }
}

module.exports = {
    checkResourceBody,
}