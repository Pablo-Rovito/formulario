import React from 'react'
import useInput from './UseInput'

const MyInput = ({ label, name, actionType }) => {
   const type = name === 'password' ? 'password' : 'text'
   const [inputHandler, valor, error, validateField] = useInput(
      name,
      actionType
   )

   return (
      <div className='input_container'>
         <label className='label'>{label}</label>
         <input
            type={type}
            className='input'
            name={name}
            value={valor}
            onChange={inputHandler}
            onBlur={validateField}
         />
         <p className='error'>{error}</p>
      </div>
   )
}

export default MyInput
