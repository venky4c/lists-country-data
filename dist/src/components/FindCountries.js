import React,{useState} from 'react';
import countryData from '../countryData'
import CountryList from './CountryList'
import Country from './Country'


function FindCountries(props) {
    const [selectedCountries, setSelectedCountries] = useState([])
    const [userInput, setUserInput] = useState('');
    const handleOnChange = (event) => {
        const searchBy = event.target.value.toLowerCase();
        setUserInput(searchBy);
      };
    
    function handleOnSelect(e) {
        const cname = e.target.value;
        console.log('continent is ', cname);
        setSelectedCountries(countryData.filter(country => country.region.includes(cname))); //setSelectedCountries
        //console.log('number of c is ', countriesInContinent.length)
    }
    console.log('number of cinc is ', selectedCountries.length);
    function onFormSubmit(e) {
        e.preventDefault();
        setUserInput('');
        setSelectedCountries(countryData.filter(country => country.name.toLowerCase().includes(userInput)));
    }
    return (
            <div className="find-countries">
                <form onSubmit={onFormSubmit}>
                    <input className="country-name"                     
                    value={userInput}
                    placeholder="Search for a country..."
                    onChange={ e => handleOnChange(e)}
                    ></input>
                </form>
                <select name='continents' className='browser-default'
                    value='abc'
                    onChange={e =>handleOnSelect(e)}>
                    <option value='all'>Filter by Continent</option>
                    <option value='Africa'>Africa</option>
                    <option value='America'>America</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceania</option>
                </select>              
                {/* { selectedCountries.map(item => <CountryList country={item}/>) 
                } */}
                { selectedCountries.map(item => <Country country={item}/>) 
                }
            </div>   
    )
}

export default FindCountries
