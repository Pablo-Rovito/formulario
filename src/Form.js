import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MyInput from './MyInput'

const Form = ({ entidad, actionType, reducerType }) => {
   const { user, generalValidity } = useSelector((state) => state[reducerType])

   const submitHandler = (e) => {
      e.preventDefault()
      if (generalValidity) {
         console.log('Vas a mandar a la API el usuario', user)
      }
   }

   return (
      <form onSubmit={submitHandler}>
         {Object.keys(entidad).map((field) => (
            <MyInput
               key={field}
               name={field}
               label={entidad[field].label}
               actionType={actionType}
            />
         ))}
         <button disabled={!generalValidity}>Enviar</button>
      </form>
   )
}

export default Form
