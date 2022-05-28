import { combineReducers } from 'redux'
import userReducer from './userReducer'
import perroReducer from './perroReducer'

const mainReducer = combineReducers({
   user: userReducer,
   perro: perroReducer,
})

export default mainReducer
