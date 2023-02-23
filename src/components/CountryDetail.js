import React from 'react';

const CountryDetail = ({country}) => {

        return(
                <div>
                <img src={country.flags.svg}/>
                <h1>{country.name.common}</h1> 
                <h3>Capital City: {country.capital}</h3>
                <h3>Continent: {country.continents}</h3>
                <p><i class="fa-regular fa-heart"></i></p>
                </div>
        )
}

export default CountryDetail;