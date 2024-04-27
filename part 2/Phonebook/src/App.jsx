import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import helper from './services/helper'
import Notification from './components/Notification'
import './App.css'
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const handleName = (e) => {
    setNewName(e.target.value)
  }
  const handlePhone = (e) => {
    setNewPhone(e.target.value)
  }
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()
    const nameObj = {
      name:newName,
      number: newPhone,
    }
    const isPresent = persons.find(person => person.name === newName) != undefined
    if (isPresent) {
      if(window.confirm(`${newName} is already added to phone book , replace the old number with a new one?`)){
        setErrorMessage(
          `The Contact '${newName}' is updated successfully`
        )  
        handleUpdate(newName)
      }
    } else {
      setErrorMessage(
        `The Contact '${newName}' is added successfully`
      )  
      helper.create(nameObj)
        .then(res => {
          setPersons(persons.concat(nameObj))
          setNewName('')
          setNewPhone('')
        })
    }
    setTimeout(() => {
      setErrorMessage(null)
    }, 3000)
  }

  const handleDelete =(id)=> {
    const updatedList = persons.filter( person => person.id !== id)
    if (window.confirm("Do you really want to delete this contact?")) {
      helper.remove(id)
      setPersons(updatedList)
      setErrorMessage(
        `The Contact is deleted successfully`
      ) 
    }
    setTimeout(() => {
      setErrorMessage(null)
    }, 3000)
  }

  const handleUpdate = (name) => {
    const person = persons.find(p => p.name === name)
    const updatedObj = {
      ...person,
      number: newPhone
    }
    helper
      .update(updatedObj,person.id)
      .then(res => {
        setPersons(persons.map(person => {
          return person.name !== name ? person : res.data
        }))
        setNewName('')
        setNewPhone('')
      })
      .catch(error => {
        setPersons(persons.filter(p => p.id !== id))
        setErrorMessage(
          `The Contact '${person.name}' is already deleted from the server`
        )  
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
      });
  }

  useEffect(() => {
    helper.getAll()
      .then(res =>  {
        setPersons(res.data)
      })
  },[persons])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter search={search} handleSearch={handleSearch} />
      <h2>Add a new contact</h2>
      <PersonForm addPerson={addPerson} newName={newName} newPhone={newPhone} handleName={handleName} handlePhone={handlePhone} handleUpdate={handleUpdate}/>
      <h2>Numbers</h2>
      <Persons search={search} persons={persons} handleDelete={handleDelete}/>
    </div>
  )
}

export default App