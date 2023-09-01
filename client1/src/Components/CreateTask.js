import React from "react";

const CreateTask = ({taskList, setTaskList, formData, setFormData, btnType, id, setBtnType}) => {

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(btnType==='Create Task'){
            try {
                const response = await fetch("http://localhost:5050/task", {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({task: formData.task}),
                })
                const data = await response.json();
                if(response.status===201){
                    setTaskList([...taskList, data]);
                    alert("Form submitted successfully");
                }
                else
                    alert(data.message);
            } catch (error) {
                alert("An error occured while sending the data");
            }
        }else{
            try {
                const response = await fetch(`http://localhost:5050/task/${formData.id}`, {
                    method: "PATCH",
                    body: JSON.stringify(formData),
                    headers: {'Content-Type': 'application/json'},
                })
                const data = await response.json();
                if(response.status===200){
                    alert("Task updated successfully");
                    taskList[formData.id] = formData.task;
                }
                else
                    alert(data.message);
            } catch (error) {
                alert("An error occured while sending the data");
            }
            setBtnType("Create Task");
        }
        setFormData({task:'', id: ''});
    }
    return(
        <div>
            <h1 style={{"color": "#ede4e4", "font-size": "3rem", "fontFamily": "revert"}}>Create Task</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter the task" name="task" required value={formData.task} onChange={handleChange}  className="inputField"/>
                <button type="submit" className="btn inputField">{btnType}</button>
            </form>
        </div>
    )
}

export default CreateTask;
