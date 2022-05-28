import React from 'react'
import './App.css'
import Form from './Form'
import Entidad1 from './user.interface'
import Entidad2 from './perro.interface'

const App = () => {
   return (
      <div className='main_container'>
         <Form entidad={Entidad1} actionType='SAVE_USER' reducerType='user' />
         <Form entidad={Entidad2} actionType='SAVE_PERRO' reducerType='perro' />
      </div>
   )
}

export default App
