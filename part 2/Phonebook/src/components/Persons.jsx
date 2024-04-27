const Persons = ({persons,search,handleDelete}) => {
  return(
    <>
    {
      persons
        .filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
        .map(person => (
          <>
          <p key={person.id}>{person.name} {person.number} <button onClick={()=>handleDelete(person.id)}>delete</button> </p>
          </>
        ))
    }
    </>
  )
}

export default Persons