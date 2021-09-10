// build your `Task` model here
const db = require('../../data/dbConfig');

async function getTasks() {
    const tasksList = await db('tasks as ts')
                        .leftJoin('projects as pr', "ts.project_id", 'pr.project_id')
                        .select('ts.task_id', 'ts.task_description', 'ts.task_notes', 'ts.task_completed', 'pr.project_name', 'pr.project_description')

    const newTaskList = tasksList.map((task) => convertToBoolean(task))

    return newTaskList;
}

async function getTaskById(id) {
    const task = await db('tasks')
        .select('*')
        .where('task_id', id)
        .first()

        return convertToBoolean(task);
}

async function addTask(task) {
    const [id] = await db('tasks').insert(task)

    return getTaskById(id)
}

function convertToBoolean(task) {
    if(task.task_completed) {
        task.task_completed = true;
        return task;
    } else {
        task.task_completed = false;
        return task;
    }
}

module.exports = {
    getTasks,
    getTaskById,
    addTask,
}