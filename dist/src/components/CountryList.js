import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';


function CountryList(props) {
    const { name, population, region, capital} = props.country;
    
    return (
        <div className='countryList'>
            {/* <BrowserRouter><Link to={`/country/${name}`}><h4>{name}</h4></Link></BrowserRouter>             */}
            <Link to={`/country/${name}`}><h4>{name}</h4></Link>
            <p><label>Population:&nbsp;</label><span>{population}</span></p>
            <p><label>Region:&nbsp;</label><span>{region}</span></p>
            <p><label>Capital:&nbsp;</label><span>{capital}</span></p>
        </div>
    )
}

export default CountryList
