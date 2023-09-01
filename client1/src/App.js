import './App.css';
import { useState } from 'react';
import Createtask from "./Components/CreateTask";
import ViewAllTask from "./Components/ViewAllTask"

function App() {
  const [taskList, setTaskList] = useState([]);
  const [formData, setFormData] = useState({task:'', id: ''});
  const [btnType, setBtnType] = useState('Create Task');
  
  return (
    <div className="App">
      <Createtask taskList={taskList} setTaskList={setTaskList} formData = {formData} setFormData={setFormData} btnType={btnType} setBtnType={setBtnType} />
      <ViewAllTask taskList={taskList} setTaskList={setTaskList} formData = {formData} setFormData={setFormData} setBtnType={setBtnType}/>
    </div>
  );
}

export default App;
