import React from "react";
import countryData from "./countryData";
import FindCountries from "./components/FindCountries";
import CountryList from "./components/CountryList";

function App() {
  return (
    <div className="container">
      <FindCountries />
    </div>
  );
}

export default App;
