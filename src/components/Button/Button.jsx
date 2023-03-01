import React from 'react'
import "../Button/Button.css"
const Button = ({change}) => {
  
  
  return (
    <button className='button__change'>
      <span onClick={change}>Ver Otro</span>
    </button>
  )
}

export default Button;
