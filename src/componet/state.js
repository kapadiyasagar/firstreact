import React, { useState } from 'react';

function countryfun(props) {
    const [country,setcountry]=useState('india');

    const changeContry=()=>{
        setcountry('uk')
    }


    return (
        <div>
            <p>country[function based componet]:{country}</p>        
            <button></button>
        </div>
    );
}

export default state;