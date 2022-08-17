import React from 'react'

const Button = ({text,...props}) => {
  return (
    <button {...props} className='btn btn-primary'>{text}</button>
  )
}
export default Button