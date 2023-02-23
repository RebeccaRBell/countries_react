import React from 'react';

const Country = ({country, index}) => {


        return(
                <option value={index}>{country.name.common}</option>
        )
}

export default Country;