import React, { useState, useEffect } from "react"
import './App.css';
import { MenuItem, FormControl, Select } from '@material-ui/core'


// https://corona.lmao.ninja/docs/#/COVID-19:%20Worldometers/get_v3_covid_19_countries__countries_
function App() {
  const [countries, setCountries] = useState([]);//intitialize it to an empty array
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country,
              value: country.countryInfo.iso2,
            }
          ));
          setCountries(countries)
        });
    }
    getCountriesData();
  }, [])

  return (
    <div className="app">

      {/* header */}
      {/* select input field */}
      {/* infoboxes */}
      {/* infoboxes */}
      {/* {/* grap */}
      <div className="app_header">
        <h1>covid-19 tracker</h1>
        <FormControl className="app_dropdown">

          <Select
            variant="outlined"
            
          >
            {/* loop through all the countries and show a dropdown option */}
            {countries.map(country => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
            {/* <MenuItem value="worldwide">Worldwide</MenuItem>
      <MenuItem value="worldwide">Worldwide</MenuItem>
      <MenuItem value="worldwide">Worldwide</MenuItem>
      <MenuItem value="worldwide">Worldwide</MenuItem> */}
          </Select>


        </FormControl>

      </div>

    </div>
  );
}

export default App;
