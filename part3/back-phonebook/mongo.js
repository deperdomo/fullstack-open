/**
 * Ejercicio 3.12: Base de datos de línea de comandos
 *
 * Este script permite:
 * 1. Agregar entradas a la agenda telefónica en MongoDB
 * 2. Listar todas las entradas existentes
 *
 * Uso:
 * - Agregar: node mongo.js <password> <name> <number>
 * - Listar: node mongo.js <password>
 */

const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

// URL de conexión a MongoDB Atlas - Tu cluster configurado
// Tu usuario: deiviperdomodev_db_user
const url = `mongodb+srv://deiviperdomodev_db_user:${password}@cluster.zekxdh1.mongodb.net/phonebookApp?retryWrites=true&w=majority&appName=cluster`

mongoose.set('strictQuery', false)
mongoose.connect(url)

// Definir el esquema para una persona
const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
  // Solo se proporcionó la contraseña, mostrar todas las entradas
  console.log('phonebook:')
  Person.find({}).then(persons => {
    persons.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
} else if (process.argv.length === 5) {
  // Se proporcionaron contraseña, nombre y número, agregar nueva entrada
  const name = process.argv[3]
  const number = process.argv[4]

  const person = new Person({
    name: name,
    number: number,
  })

  person.save().then(() => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
} else {
  console.log('Usage: node mongo.js <password> [name] [number]')
  process.exit(1)
}
