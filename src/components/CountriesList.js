import React from 'react';
import Country from './Country';

const CountriesList = ({countries, onCountryClicked}) => {

           const handleChange = function(event) {
                const chosenCountry = countries[event.target.value];
                onCountryClicked(chosenCountry);
        }

        const ListOfCountries = countries.map((country, index) => {
        return <Country country={country} index={index} key={index}/>
        })

     
        
        return(
                <div className="country-list">
                <select defaultValue = "" onChange={handleChange}>
                        <option value="">Select A Country</option>
                        {ListOfCountries}
                </select>
                
                </div>
        )
}
export default CountriesList;