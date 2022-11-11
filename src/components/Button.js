import React from 'react'
import './button.css'

const Button = ({ clickHandler, btnText }) => {
  return (
    <button onClick={clickHandler}>{btnText}</button>
  )
}

export default Button