import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null)
  const api_key = import.meta.env.VITE_SOME_KEY

  useEffect(() => {
    if (!capital) return
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${api_key}`)
      .then(response => {
        setWeather(response.data)
      })
      .catch(() => setWeather(null))
  }, [capital, api_key])

  if (!weather) return <div>Loading weather...</div>

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <div>temperature {weather.main.temp} °C</div>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
      <div>wind {weather.wind.speed} m/s</div>
    </div>
  )
}

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital?.[0]}</div>
      <div>area {country.area}</div>
      
      <h3>languages:</h3>
      <ul>
        {Object.values(country.languages || {}).map(language => 
          <li key={language}>{language}</li>
        )}
      </ul>
      
      <img 
        src={country.flags.png} 
        alt={`flag of ${country.name.common}`}
        width="150"
      />
      <Weather capital={country.capital?.[0]} />
    </div>
  )
}

const CountryList = ({ countries, onShowCountry }) => {
  return (
    <div>
      {countries.map(country => 
        <div key={country.name.common}>
          {country.name.common} 
          <button onClick={() => onShowCountry(country)}>show</button>
        </div>
      )}
    </div>
  )
}

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    if (search) {
      const filtered = countries.filter(country =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
      setFilteredCountries(filtered)
      setSelectedCountry(null)
    } else {
      setFilteredCountries([])
      setSelectedCountry(null)
    }
  }, [search, countries])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handleShowCountry = (country) => {
    setSelectedCountry(country)
  }

  const renderContent = () => {
    if (selectedCountry) {
      return <Country country={selectedCountry} />
    }

    if (filteredCountries.length > 10) {
      return <div>Too many matches, specify another filter</div>
    } else if (filteredCountries.length > 1) {
      return <CountryList countries={filteredCountries} onShowCountry={handleShowCountry} />
    } else if (filteredCountries.length === 1) {
      return <Country country={filteredCountries[0]} />
    }

    return null
  }

  return (
    <div>
      <div>
        find countries <input value={search} onChange={handleSearchChange} />
      </div>
      {renderContent()}
    </div>
  )
}

export default App
