import Entidad1 from './user.interface'
import Entidad2 from './perro.interface'

const validate = (valor, campo, entidad) => {
   const Entidad = entidad === 'user' ? Entidad1 : Entidad2
   let error = ''

   error = Entidad[campo].validacion(valor)

   return error
}

export default validate
