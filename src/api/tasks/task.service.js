const Task = require("../../models/task");

const getTask = (req) => {
    try {
        return Task.find(req.query);
    } catch (e) {
        return e;
    }
}

const saveTask = (req) => {
    try {
        var task = new Task(req.body);
        return task.save();
    } catch (e) {
        return e;
    }
}

const updateTask = (req) => {
    try {
        return Task.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deleteTask = (req) => {
    try {
        return Task.findByIdAndDelete(req.params.id);
    } catch (e) {
        return  e;
    }
}

const getTaskById = (req) => {
    try {
        return Task.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getTask,
    saveTask,
    updateTask,
    deleteTask,
    getTaskById
}