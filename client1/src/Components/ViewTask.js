import React from "react";
import {HiPencilAlt, HiOutlineTrash } from "react-icons/hi"

const ViewTask = ({task, taskList, setTaskList, formData, setFormData, setBtnType}) => {
    const handleDelete = async(id) => {
        await fetch(`http://localhost:5050/task/delete/${id}`, {
            method: "DELETE"
        })
        const newTaskList = await taskList.filter(task=>task._id!==id)
        setTaskList(newTaskList)
    }
    const handleUpdate = (task) => {
        setFormData({task: task.task, id: task._id});
        setBtnType("Update Task");
    }
    return(
        <div className="taskBox">
            <div>{task.task}</div>
            <div>
                <button className="btn1" onClick={e=>handleUpdate(task)}>
                <HiPencilAlt/>
                </button>
                <button className="btn1" onClick={e=>handleDelete(task._id)}>
                <HiOutlineTrash/>
                </button>
            </div>
        </div>
    )
}

export default ViewTask;