import React, {useEffect} from "react";
import ViewTask from "./ViewTask";

const ViewAllTask = ({taskList, setTaskList, formData, setFormData, setBtnType}) => {
    useEffect(()=>{
        const fetchTask = async () =>{
            const response = await fetch("http://localhost:5050/task/");
            const data = await response.json();
            setTaskList(data);
        }
        fetchTask();
    }, [taskList, setTaskList])
    return(
    <>
        <div>
            {taskList && taskList.map(task=>(
                <ViewTask key={task._id} task={task} taskList={taskList} setTaskList={setTaskList} formData = {formData} setFormData={setFormData} setBtnType={setBtnType} />
                ))}
        </div>
    </>
    )
}

export default ViewAllTask;