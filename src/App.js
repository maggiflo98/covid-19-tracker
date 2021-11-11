import React, { useState, useEffect } from "react"
import './App.css';
import { MenuItem, FormControl, Select } from '@material-ui/core'
import Infobox from "./Infobox";


// https://corona.lmao.ninja/docs/#/COVID-19:%20Worldometers/get_v3_covid_19_countries__countries_
function App() {
  const [countries, setCountries] = useState([]);
  //intitialize it to an empty array
  const [country, setCountry] = useState('worldwide');
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
// onchange
const  onCountryChange =  (event) =>{
  const countryCode = event.target.value;
  console.log("yooo",countryCode);
  setCountry(countryCode)
};
  return (
    <div className="app">

      {/* header */}
      {/* select input field */}
          {/* {/* grap */}
      <div className="app_header">
        <h1>covid-19 tracker</h1>
        <FormControl className="app_dropdown">

          <Select
            variant="outlined"
            onChange={onCountryChange}
            value={country}

          >
            {/* loop through all the countries and show a dropdown option */}
            <MenuItem value="worldwide">Worldwide</MenuItem>
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
      <div className="app_stats">
          {/* infoboxes title=Corona  virus cases*/}
          <Infobox title="cases" total={2000}/>
          <Infobox title="recoveries"/>
          <Infobox title="deaths"/>
      
          {/* infoboxes   title=Corona virus recoveries */}
      </div>
    </div>
  );
}

export default App;
