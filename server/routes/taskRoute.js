const express = require("express");
const { createTask, updateTask, viewTasks, deleteTask } = require("../controller/Task");
const router = express.Router();

router.post("/", createTask);
router.patch("/:id", updateTask);
router.get("/", viewTasks);
router.delete("/delete/:id", deleteTask);

exports.taskRouter = router;