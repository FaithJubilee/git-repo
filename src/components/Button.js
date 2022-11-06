import React from 'react'
import './button.scss'

const Button = ({ clickHandler }) => {
  return (
    <button onClick={clickHandler}>Button</button>
  )
}

export default Button