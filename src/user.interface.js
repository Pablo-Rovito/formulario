const User = {
   fullname: {
      valor: '',
      error: '',
      label: 'Enter your Full Name',
      validacion: function (t) {
         let respuesta =
            t.length < 5 ? 'No podés tener un nombre tan corto.' : ''
         return respuesta
      },
   },
   username: {
      valor: '',
      error: '',
      label: 'Enter your username',
      validacion: function (t) {
         let respuesta = t === 'admin' ? 'No sos admin' : ''
         return respuesta
      },
   },

   password: {
      valor: '',
      error: '',
      label: 'Enter your password',
      validacion: function (t) {
         let respuesta = t === '123' ? 'Es demasiado fácil' : ''
         return respuesta
      },
   },
}

export default User
