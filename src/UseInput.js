import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import validate from './validate'

const useInput = (name, actionType) => {
   const [valor, setValor] = useState('')
   const [error, setError] = useState(false)

   const dispatch = useDispatch()

   const inputHandler = (e) => {
      const valor = e.target.value
      setError(false)
      setValor(valor)
   }

   const validateField = () => {
      const entidad = actionType === 'SAVE_PERRO' ? 'perro' : 'user'
      const hayError = validate(valor, name, entidad)
      setError(hayError)
      dispatch({
         type: actionType,
         payload: { property: name, value: valor, error: hayError },
      })
   }

   return [inputHandler, valor, error, validateField]
}

export default useInput
