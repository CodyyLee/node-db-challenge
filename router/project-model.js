const db = require('../data/dbConfig.js');

module.exports = {
    find,
    addProject,
    findResources,
    addTask,
    findTask,
    addResource
}

function find() {
    return db('projects');
}

function findResources() {
    return db('resources');
}

function addResource(body) {
    return db('resources').insert(body);
}

function addProject(body) {
    return db('projects').insert(body);
}

function addTask(body) {
    return db('tasks').insert(body);
}

function findTask() {
    return db('tasks').join('projects', 'tasks.id', '=', 'projects.tasks_id');
}