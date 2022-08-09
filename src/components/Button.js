import React from 'react'

const Button = ({text, color, onclick}) => {

  return (
    <button className="btn" style={{backgroundColor: color}} onClick={onclick}>
        {text} 
    </button>
  )
}

export default Button