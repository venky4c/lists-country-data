import React from 'react'
import countryData from './countryData'
import Header from './components/Header'
import FindCountries from './components/FindCountries'
import CountryList from './components/CountryList'

function App() {
    const countryComponents = countryData.map(item => <CountryList country={item}/>)
    return (
        <div class='container'>                              
                <FindCountries />                
        </div>
    )
}

export default App
