import React, {useState, useEffect} from 'react';
import {FiHeart} from "react-icons/fi";

const CountryDetail = ({country, favourited}) => {



        return(
                <div>
                <img className="flag" src={country.flags.svg} alt="Flag of selected country"/>
                <h1>{country.name.common}</h1> 
                <h3>Capital City: {country.capital}</h3>
                <h3>Population: {country.population}</h3>
                <h3>Coat of Arms: <img className="coat-of-arms" src={country.coatOfArms.svg} alt='Coat of arms of selected country'/></h3>
                <button onClick={favourited} value={country} className="favorite-button">
                <FiHeart className="heart"/>
                </button>
                </div>
        )
}

export default CountryDetail;