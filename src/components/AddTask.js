import React, { useState } from 'react'

const AddTask = ({taskAdder}) => {


    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState("false")


    function Submitfunction(e){
        e.preventDefault()
        if (!text) {
            alert("Please put text")
            return
        }
        
        taskAdder({text, day, reminder})
    }


  return ( 
        <form className='add-form' onSubmit={Submitfunction}>
          <div className='form-control'>
            <label>Task</label>
            <input
              type='text'
              placeholder='Add Task'
              value={text}
              onChange={(e)=> setText(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label>Day & Time</label>
            <input
              type='text'
              placeholder='Add Day & Time'
              value={day}
              onChange={(e)=> setDay(e.target.value)}
            />
          </div>
          <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input
              type='checkbox'
              value={reminder}
              onChange={(e)=> setReminder(e.target.checked)}
            />
          </div>
    
          <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
  )
}

export default AddTask