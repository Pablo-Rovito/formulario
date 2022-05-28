const Perro = {
   duenio: {
      valor: '',
      error: '',
      label: 'Ingresá tu duenio',
      validacion: function (t) {
         let respuesta =
            t.toLowerCase() === 'nadie'
               ? 'No podés tener un dueño que se llame nadie'
               : ''
         return respuesta
      },
   },
   especie: {
      valor: '',
      error: '',
      label: 'Ingresa tu especie',
      validacion: function (t) {
         let respuesta = t === 'elefante' ? 'No podés ser un elefante.' : ''
         return respuesta
      },
   },
   raza: {
      valor: '',
      error: '',
      label: 'Ingresá tu raza',
      validacion: function (t) {
         let respuesta =
            t.length < 5 ? 'No podés tener una raza tan corta.' : ''
         return respuesta
      },
   },
}

export default Perro
