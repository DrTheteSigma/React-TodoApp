import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from "react"
import { useEffect } from "react"
import AddTask from "./components/AddTask"

// default todos
const openingTaks = [{id:1,text:"Meeting at USF",day:"Feb 6th at 1:30pm", reminder:true}, {id:2,text:"Get cat food",day:"Feb 7th at 2:30pm", reminder:true}, {id:3,text:"eat food",day:"Feb 8th at 3:30pm", reminder:false},
{id:4,text:"Meeting at Tampa",day:"Feb 10th at 5:30pm", reminder:false}
]


function App(){

  const [toggleShow, setToggleShow] = useState(true)
  const [tasks,setTasks]= useState(openingTaks)
  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }

  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) => task.id ===id ? {...task, reminder: !task.reminder}: task))
  }

  const taskAdder = (task) =>{
    const id = Math.floor(Math.random()*10000) +1
    const newtask = {...task, id}

   setTasks([...tasks,newtask])
  }

  const changeStatus = () => {
    setToggleShow(!toggleShow)
  }


return(
  <div className="container">
    <Header title="Hello" changeStatus={changeStatus} currentStatus={toggleShow} />
    {toggleShow && <AddTask taskAdder={taskAdder}  ></AddTask>}
    <Tasks tasks={tasks}  deleteTask={deleteTask} toggleReminder={toggleReminder} ></Tasks>


  </div>
)

}
export default App
