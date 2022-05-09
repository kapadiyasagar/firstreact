 import React, { useState } from 'react';

function  Cstate (props) {

    const[contryname,setContry]=useState('india')
    const[cityname,setCity]=useState('surat')


    const changeContry=()=>{
        setContry('us')
        setCity('Chicago')
    }
    return (
        <div>
            
            <p>state:   {contryname}</p>
            <button onClick={() =>changeContry()}>change</button>

            <p>cityname:{cityname }</p>
            <button onClick={() =>setCity()}>change</button>
        </div>
    );
}

export default  Cstate
;