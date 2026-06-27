import React, { useEffect, useState } from 'react'
import Taskform from './Components/Taskform'
import TaskList from './Components/TaskList'
import ProgressTracker from './Components/ProgressTracker'
import Dashboard from "./Components/Dashboard";


export default function App() {
 const[tasks, setTasks] = useState([]);

 useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  const addTask = (task) => {
setTasks([...tasks, task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtasks = [...tasks];
    newtasks[index] = updatedTask;
    setTasks(newtasks);
}
const deleteTask = (index) => {
  setTasks(tasks.filter((_ , i) => i != index))

}
const clearTasks = () => {
  setTasks([]);
}
  return (
    <div className='app-container'>
      <div className='header'>
      <h1>TaskNova</h1>
      <h4>Organize. Prioritize. Achieve.</h4>
      </div>
      

<Taskform addTask={addTask}/>
<Dashboard tasks={tasks} />
      <TaskList tasks = {tasks}
      updateTask = {updateTask}
      deleteTask ={deleteTask} />
      



      <ProgressTracker tasks={tasks}/>
      {tasks.length>0 && 
      (<button onClick={clearTasks}
        className='clear-btn'>
          Clear All Tasks</button>)}
    </div>
    
  )
}
