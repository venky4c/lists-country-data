import React from 'react'
import { Link } from 'react-router-dom';
import { useHistory,useParams } from 'react-router-dom';

function Country(props) {
    const { name, flag, population, nativeName, region,subregion, capital,topLevelDomain,languages,currencies,borders,alphaCode3} = props.country;
    console.log('name of country is', name);
    let history = useHistory();
    function handleOnClick() {
        history.push('/');
    }
    function fetchCountryNamefromAlphaCode(alphaCode) {
        
    }
    return (
        <div className='country'>
            <div className="title">
                <button className="back"
                    onClick={handleOnClick}>Back</button> 
                <h4>{name}</h4>
            </div>    
            <div className="details">
                <p className='flag'><img src={flag}></img></p>
                <div className="part1">
                    <div className="part1a">
                        <p><label>Native Name:&nbsp;</label><span>{nativeName}</span></p>
                        <p><label>Population:&nbsp;</label><span>{population}</span></p>
                        <p><label>Region:&nbsp;</label><span>{region}</span></p>
                        <p><label>Sub Region:&nbsp;</label><span>{subregion}</span></p>
                        <p><label>Capital:&nbsp;</label><span>{capital}</span></p>
                    </div>
                    <div className="part1b">
                        <p><label>Top Level Domain:&nbsp;</label><span>{topLevelDomain}</span></p>
                        <p><label>Languages:&nbsp;</label><span>{languages.map(item => <p>{item.name}</p>)}</span></p>
                        <p><label>Currencies:&nbsp;</label><span>{currencies.map(item => <p>{item.name}</p>)}</span></p>            
                    </div>                
                </div>
            </div>
            
            <div className="part3">
            <p><label>Borders:&nbsp;</label><span>{borders.map(item => <p>{item}</p>)}</span></p>
            </div>
        </div>
    )
}

export default Country
