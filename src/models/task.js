const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    complesion: {
        type: Boolean,
        default: false
    },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;