import { useState,useEffect } from 'react'
import Filter from './components/Filter'
import helper from './services/helper'
import CountryView from './components/CountryView'

const App =()=> {
  const [search,setSearch] = useState('')
  const [countries,setCountries] =useState([])
  const handleSearch =(e)=> {
    setSearch(e.target.value)
  }

  useEffect(()=>{
    helper.getAllCountries()
      .then(res => {
        setCountries(res.data)
      })
  },[])

  return (
    <>
      <Filter search={search} handleSearch={handleSearch} />
      <CountryView search={search} countries={countries}/>
    </>
  )
}

export default App
