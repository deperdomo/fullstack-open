import { useState, useEffect } from 'react'
import personsService from './services/persons'
import './notification.css'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  useEffect(() => {
    personsService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => {
        console.error('Error loading persons:', error)
        setNotificationType('error')
        setNotification('Error loading phonebook data')
        setTimeout(() => setNotification(null), 4000)
      })
  }, [])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)
  const [notificationType, setNotificationType] = useState('success')
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const existingPerson = persons.find(person => person.name === newName)
    if (existingPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const updatedPerson = { ...existingPerson, number: newNumber }
        personsService.update(existingPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== existingPerson.id ? person : returnedPerson))
            setNotificationType('success')
            setNotification(`Updated ${returnedPerson.name}'s number`)
            setTimeout(() => setNotification(null), 4000)
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            console.error('Error updating person:', error)
            setNotificationType('error')
            const errorMessage = error.response?.data?.error || 
                                `Information of ${existingPerson.name} has already been removed from server`
            setNotification(errorMessage)
            setTimeout(() => setNotification(null), 4000)
            if (error.response?.status === 404) {
              setPersons(persons.filter(person => person.id !== existingPerson.id))
            }
          })
      }
      return
    }
    const personObject = { name: newName, number: newNumber }
    personsService.create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNotificationType('success')
        setNotification(`Added ${returnedPerson.name}`)
        setTimeout(() => setNotification(null), 4000)
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        console.error('Error adding person:', error)
        setNotificationType('error')
        const errorMessage = error.response?.data?.error || 'Error adding person'
        setNotification(errorMessage)
        setTimeout(() => setNotification(null), 4000)
      })
  }

  const personsToShow = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personsService.remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
          setNotificationType('success')
          setNotification(`Deleted ${name}`)
          setTimeout(() => setNotification(null), 4000)
        })
        .catch(error => {
          console.error('Error deleting person:', error)
          setNotificationType('error')
          const errorMessage = error.response?.status === 404 
            ? `Information of ${name} has already been removed from server`
            : 'Error deleting person'
          setNotification(errorMessage)
          setTimeout(() => setNotification(null), 4000)
          if (error.response?.status === 404) {
            setPersons(persons.filter(person => person.id !== id))
          }
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} type={notificationType} />
      <Filter value={filter} onChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        handleNameChange={handleInputChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} handleDelete={handleDelete} />
    </div>
  )
}

export default App