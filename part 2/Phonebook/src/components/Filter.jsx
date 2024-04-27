const Filter = ({ search, handleSearch }) => {
    return (
        <div>
            search with: <input value={search} onChange={handleSearch} />
        </div>
    )
}

export default Filter