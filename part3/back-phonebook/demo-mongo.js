/**
 * DEMO del Ejercicio 3.12 - Simulación local
 *
 * Este archivo demuestra cómo funcionaría el script mongo.js
 * con datos simulados (sin necesidad de MongoDB Atlas)
 */

// Simulamos una base de datos en memoria
let phonebookData = [
  { name: 'Anna García', number: '040-1234556' },
  { name: 'Arto Vihavainen', number: '045-1232456' },
  { name: 'Ada Lovelace', number: '040-1231236' }
]

// Simulamos el comportamiento del script
function simulateMongoScript(args) {
  if (args.length < 3) {
    console.log('give password as argument')
    return
  }

  if (args.length === 3) {
    // Solo se proporcionó la contraseña, mostrar todas las entradas
    console.log('phonebook:')
    phonebookData.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
  } else if (args.length === 5) {
    // Se proporcionaron contraseña, nombre y número, agregar nueva entrada
    const name = args[3]
    const number = args[4]

    phonebookData.push({ name, number })
    console.log(`added ${name} number ${number} to phonebook`)
  } else {
    console.log('Usage: node mongo.js <password> [name] [number]')
  }
}

// Demostraciones
console.log('=== DEMO DEL EJERCICIO 3.12 ===\n')

console.log('1. Intentar ejecutar sin argumentos:')
console.log('$ node mongo.js')
simulateMongoScript(['node', 'mongo.js'])

console.log('\n2. Listar todas las entradas:')
console.log('$ node mongo.js mypassword123')
simulateMongoScript(['node', 'mongo.js', 'mypassword123'])

console.log('\n3. Agregar una nueva entrada:')
console.log('$ node mongo.js mypassword123 "Maria Rodriguez" 030-9876543')
simulateMongoScript(['node', 'mongo.js', 'mypassword123', 'Maria Rodriguez', '030-9876543'])

console.log('\n4. Listar entradas después de agregar:')
console.log('$ node mongo.js mypassword123')
simulateMongoScript(['node', 'mongo.js', 'mypassword123'])

console.log('\n5. Agregar nombre con espacios en blanco:')
console.log('$ node mongo.js mypassword123 "Juan Carlos Pérez" 050-1111111')
simulateMongoScript(['node', 'mongo.js', 'mypassword123', 'Juan Carlos Pérez', '050-1111111'])

console.log('\n6. Estado final de la agenda:')
console.log('$ node mongo.js mypassword123')
simulateMongoScript(['node', 'mongo.js', 'mypassword123'])

console.log('\n=== FIN DE LA DEMO ===')
console.log('\nEl archivo mongo.js real se conectaría a MongoDB Atlas')
console.log('y realizaría estas operaciones en la base de datos real.')
