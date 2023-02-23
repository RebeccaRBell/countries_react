import React from 'react';
import Country from './Country';



const Favourites = ({favCountries, index}) => {

        const favourited = function(event) {
        const favCountry = favCountries[event.target.value];
        console.log(favCountry);

        }

        const ListOfFavourites = favCountries.map((country) => {
                return <Country country={country} key={index} index={index} favourited={favourited}/>
        })


        return(
                <div>
                <select defaultValue = ''>
                <option value=''> Favourite Countries
                </option>
                 {ListOfFavourites}
                </select>
                </div>
        )
}

export default Favourites;