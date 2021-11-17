import React, { useState, useEffect } from "react"
import './App.css';
import { MenuItem, FormControl, Select,Card, CardContent } from '@material-ui/core'
import Infobox from "./Infobox";
import Map from "./Map";
import Table from "./Table";
import {sortData} from "./utils"
// import LineGraph from "./LineGraph";


// https://corona.lmao.ninja/docs/#/COVID-19:%20Worldometers/get_v3_covid_19_countries__countries_
function App() {
  const [countries, setCountries] = useState([]);
  //intitialize it to an empty array
  const [country, setCountry] = useState('worldwide');
  const  [countryInfo,setCountryInfo]=useState({});
  const[tableData,setTableData]=useState([]);
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
          const sortedData=sortData(data);
          setCountries(countries)
          setTableData(sortedData);
        });
    }
    getCountriesData();
  }, [])
// onchange
const  onCountryChange = async (event) =>{
  const countryCode = event.target.value;
    setCountry(countryCode)

    const url=countryCode ==='worldwide'
    ?'https://disease.sh/v3/covid-19/all'
    :`https://disease.sh/v3/covid-19/countries/${countryCode}`

    await fetch(url)
    .then(response => response.json())
    .then(data => {
      setCountry(countryCode);
      // all data  from  country response
     
      setCountryInfo(data);

    })
};
  return (
    <div className="app">
      <div className="app_left">

          {/* header */}
          {/* select input field */}
        
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
          <Infobox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
          <Infobox title="Recovered" cases={countryInfo.todayRecoverd} total={countryInfo.recovered}/>
          <Infobox title="Deaths"  cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
      
          {/* infoboxes   title=Corona virus recoveries */}
      </div>
      <Map/>
    </div>   
          {/* app left */}

             {/* {/* graph,table */}
     <Card className="app_right">
       <CardContent>
         <h3>Live cases by country</h3>
         <Table countries={tableData}/>
        
         <h3>Worldwide cases</h3>
         {/* <LineGraph/> */}
       </CardContent>
             
     </Card>
            {/* app_right */}
    </div>
  );
}

export default App;
