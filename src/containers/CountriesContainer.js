import React, { useState, useEffect } from 'react';
import CountriesList from '../components/CountriesList';
import CountryDetail from '../components/CountryDetail';
import Favourites from '../components/Favourites';

const CountriesContainer = () => {
        
        const [allCountries, setAllCountries] = useState([]);
        const [selectedCountry, setSelectedCountry] = useState(null);
        const [favCountries, setFavCountries] = useState([]);


        useEffect(() => {
        getCountries();
        },
        )

        const getCountries = function(){
                fetch('https://restcountries.com/v3.1/all')
                .then(response => response.json())
                .then(allCountries => setAllCountries(allCountries));
        }

        const onCountryClicked = function(country){
                setSelectedCountry(country);
        }


        return (
                <div>
                <h1>Countries of The World </h1>
                        <CountriesList countries={allCountries} onCountryClicked = {onCountryClicked}/><span><Favourites  favCountries={favCountries}/></span>
                        {selectedCountry ? <CountryDetail country={selectedCountry} /> : null}
                        
                </div>
        )
}

export default CountriesContainer;