const db = require("../config")

function addResources(resource) {
    return db("resources")
        .where("name")
        .insert(resource)
}

function listResources() {
    return db("resources")
}

function addProjects(project) {
    return db("projects")
        .where("name")
        .insert(project)
}

function listProjects() {
    return db("projects")
}

function addTasks(task) {
    return db("tasks")
        .where("name")
        .insert(task)
}

function listTasks() {
    return db("tasks")
        .join("projects", "tasks.id", "projects.tasks_id")
        .select(
            "tasks.id",
            "tasks.description",
            "tasks.notes",
            "tasks.completed",
            "projects.name",
            "projects.description",
        )
}

module.exports = {
    addResources,
    listResources,
    addProjects,
    listProjects,
    addTasks,
    listTasks,
}