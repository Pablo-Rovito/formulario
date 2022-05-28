import Entidad from './user.interface'

const initialState = {
   user: Entidad,
   generalValidity: false,
}
const reducer = (state = initialState, action) => {
   if (action.type === 'SAVE_USER') {
      const newUser = {
         ...state.user,
         [action.payload.property]: {
            valor: action.payload.value,
            error: action.payload.error,
         },
      }
      const newGeneralValidity = !Object.values(newUser).some(
         ({ error, valor }) => error || !valor.length
      )
      console.log(newUser, newGeneralValidity)
      return {
         generalValidity: newGeneralValidity,
         user: newUser,
      }
   }
   return state
}

export default reducer
