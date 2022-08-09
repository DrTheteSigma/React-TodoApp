import React from 'react'
import {FaTimes} from "react-icons/fa"

const Task = ({task, deleteTask, toggleReminder}) => {
  return (
    <div className={`task ${task.reminder ? "reminder": "" }`} >
        <h3>{task.text} <FaTimes onClick={()=> deleteTask(task.id)}  /> </h3>
        <p>{task.day} <button className='btn' onClick={()=>toggleReminder(task.id)}>change</button></p>
        
    </div>
  )
}

export default Task