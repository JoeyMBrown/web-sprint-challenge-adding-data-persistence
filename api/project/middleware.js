const checkProjectBody = (req, res, next) => {
    if(!req.body.project_name || typeof req.body.project_name !== 'string') {
        next({ message: 'Bad request, check project_name property.', status: 400})
    } else { 
        next()
    }
}

module.exports = {
    checkProjectBody,
}