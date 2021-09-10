// build your `Resource` model here
const db = require('../../data/dbConfig');

function getResources() {
    return db('resources')
    .select('*')
}

async function addResource(resource) {
    const [id] = await db('resources').insert(resource)

    return getResourceById(id)
}

function getResourceById(id) {
    return db('resources')
    .select('*')
    .where('resource_id', id)
    .first()
}

module.exports = {
    getResources,
    addResource,
    getResourceById
}