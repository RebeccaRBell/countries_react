import React, { useEffect, useState } from 'react';
import CountriesList from '../components/CountriesList';
import CountryDetail from '../components/CountryDetail';

const CountriesContainer = () => {
        
        const [allCountries, setAllCountries] = useState([]);
        const [selectedCountry, setSelectedCountry] = useState([]);
        const favouriteCountries = [];


        useEffect(() => {
          getCountries();
        }, [])

        const getCountries = function(){
                fetch('https://restcountries.com/v3.1/all')
                .then(response => response.json())
                .then(allCountries => setAllCountries(allCountries));
        }

        const onCountryClicked = function(country){
                setSelectedCountry(country);
        }

        const onFavourited = function(country){
                favouriteCountries.push(country);
        }

        return (
                <div>
                <h1>Countries of The World </h1>
                        <CountriesList countries={allCountries} onCountryClicked = {onCountryClicked}/>
                        {selectedCountry ? <CountryDetail country={selectedCountry} /> : null}
                        
                </div>
        )
}

export default CountriesContainer;