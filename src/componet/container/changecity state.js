import React, { useState } from 'react';

function changecity (props) {

    const [City,setCountry]=useState('india')

    return (
        <div>
            <p>country{changecity}</p>            
        </div>
    );
}

export default changecity;