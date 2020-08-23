import React, { useState, useEffect } from "react";
import countryData from "../countryData";
import CountryList from "./CountryList";
import Country from "./Country";

function FindCountries() {
  const countryComponents = countryData.map((item) => (
    <CountryList country={item} />
  ));
  const [selectedCountries, setSelectedCountries] = useState(countryComponents);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    setSelectedCountries(countryComponents);
    console.log("FindCountries -> countryComponents", countryComponents[0]);
  }, []);

  const handleOnChange = (event) => {
    const searchBy = event.target.value.toLowerCase();
    setUserInput(searchBy);
  };

  function handleOnSelect(e) {
    const cname = e.target.value;
    console.log("continent is ", cname);
    setSelectedCountries(
      countryData.filter((country) => country.region.includes(cname))
    );
  }
  console.log("number of cinc is ", selectedCountries.length);
  function onFormSubmit(e) {
    e.preventDefault();
    fetchCountriesByInput(userInput);
  }
  function fetchCountriesByInput(input) {
    setSelectedCountries(
      countryData.filter((country) =>
        country.name.toLowerCase().includes(input)
      )
    );
  }

  return (
    <div className="find-countries">
      <form onSubmit={onFormSubmit}>
        <input
          className="country-name"
          value={userInput}
          placeholder="Search for a country..."
          onChange={(e) => handleOnChange(e)}
        ></input>
      </form>
      <select
        name="continents"
        className="browser-default"
        value="abc"
        onChange={(e) => handleOnSelect(e)}
      >
        <option value="all">Filter by Continent</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      {/* { selectedCountries.map(item => <CountryList country={item}/>) 
                } */}
      {selectedCountries.map((item) => (
        <CountryList country={item} />
      ))}
    </div>
  );
}

export default FindCountries;
