const mongoose = require('mongoose')

// Configurar strictQuery para evitar warnings
mongoose.set('strictQuery', false)

// Obtener la URL de conexión desde variables de entorno
const url = process.env.MONGODB_URI

console.log('connecting to', url)

// Conectar a MongoDB
mongoose.connect(url)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })

// Definir el esquema para una persona
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true
  },
  number: {
    type: String,
    minLength: 8,
    required: true,
    validate: {
      validator: function(v) {
        // Patrón: 2-3 dígitos, guión, resto de números. Total 8+ caracteres.
        return /^\d{2,3}-\d+$/.test(v)
      },
      message: props => `${props.value} is not a valid phone number! Phone number must be in format XX-XXXXXXX or XXX-XXXXXXX`
    }
  },
})

// Configurar el método toJSON para formatear el output
personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// Exportar el modelo
module.exports = mongoose.model('Person', personSchema)
