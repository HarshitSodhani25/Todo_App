const {Task} = require("../models/Task.js");

exports.createTask = async(req, res) =>{
    try {
        //if two tasks of same name and same date then it is not allowed
        const task1 = await Task.find({task:req.body.task});
        if(task1.length > 0){
            res.status(404).json({status: "failed", message: "two tasks of same name cannot be created"})
        }else{
            const task = new Task(req.body);
            const response = await task.save();
            res.status(201).json(response);
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}

exports.updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await Task.findByIdAndUpdate(id, req.body, {new:true})
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

exports.viewTasks = async (req, res) => {
    try {
        const response = await Task.find();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

exports.deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await Task.findByIdAndDelete(id);
        res.status(202).json({status: "success", message: "task deleted successfully"});
    } catch (error) {
        res.status(400).json(error.message);
    }
}