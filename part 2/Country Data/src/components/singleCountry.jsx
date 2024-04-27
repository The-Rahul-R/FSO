const SingleCountry =({country,weatherDetails})=> {
    const languages = Object.values(country.languages)
    const capitals = Object.values(country.capital)
    const temperature = weatherDetails?.current?.temp_c
    const wind = weatherDetails?.current?.gust_kph
    const weatherIcon = weatherDetails?.current?.condition.icon
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>capital: {capitals.map(capital => {
                return <p>{capital}</p>
            })}</p>
            <p>area: {country.area}</p>
            <h3><b>languages:</b></h3>
            <ul>
                {languages.map(lang => {
                    return <li key={lang}>{lang}</li>
                })}
            </ul>
            <img src={country.flags.png} alt="flag" style={{height:'200px',width:'200px'}} />
            <h1>Weather in {country.name.common}</h1>
            <p>Temperate = {temperature} degree celcius</p>
            <img src={weatherIcon} alt="weather" style={{height:'50px',width:'50px'}} />
            <p>Wind = {wind} kmph</p>
        </div>
    )
}

export default SingleCountry