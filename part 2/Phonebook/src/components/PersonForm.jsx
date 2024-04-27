const PersonForm = ({addPerson,newName,newPhone,handleName,handlePhone}) => {
  return (
      <form onSubmit={addPerson}>
        <div>
          name: <input type="text" pattern="[A-Za-z]+" maxLength={15} value={newName} onChange={handleName} />
        </div>
        <div>
          number: <input type="tel" maxLength={10} value={newPhone} onChange={handlePhone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm