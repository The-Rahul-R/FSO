import SingleCountry from "./singleCountry";
import { useState,useEffect } from "react";
import helper from "../services/helper";

const CountryView = ({ search, countries }) => {
  const filtered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  const [selectedCountry, setSelectedCountry] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
	const [weatherDetails,setWeatherDetails] = useState({})


  const handleShowCountry = (country) => {
		setButtonClicked(true)
    setSelectedCountry(country);
  };

	useEffect(() => {
		if (selectedCountry) {
			helper.getWeather(selectedCountry.name.common)
				.then(res => setWeatherDetails(res.data))
				.catch(error => console.error('Error fetching weather:', error));
		}
	}, [selectedCountry]);
	
	useEffect(() => {
    if (filtered.length === 1) {
      const country = filtered[0];
      setSelectedCountry(country);
    } 
  }, [filtered]);

	useEffect(()=>{
		setButtonClicked(false)
	},[search])	

  if (search !== "" && filtered.length > 10) {
    return <p>Too many matches. Specify another filter</p>;
  } else if (filtered.length === 1) {
		const country = filtered[0]
    return <SingleCountry country={country} weatherDetails={weatherDetails} />;
  } else if (filtered.length > 1 && filtered.length <= 10) {
    if (!buttonClicked) {
      return (
        <div>
          {filtered.map((country) => (
            <div key={country.name.common}>
              <p>
                {country.name.common}{" "}
                <button onClick={() => handleShowCountry(country)}>
                  show
                </button>
              </p>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          {selectedCountry && <SingleCountry country={selectedCountry} weatherDetails={weatherDetails} />}
        </div>
      );
    }
  } else {
    return "";
  }
};

export default CountryView;
