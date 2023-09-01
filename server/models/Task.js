const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    }
})

exports.Task = mongoose.model("Task", taskSchema);