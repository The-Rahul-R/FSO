const Filter =({search,handleSearch})=> {
    return (
        <div>
            Find Countries: 
            <input type="text" value={search} onChange={handleSearch} />
        </div>
    )
}

export default Filter