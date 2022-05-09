import React, { useState } from 'react';

function State(props) {

  const [contryname,setContry] = useState ('UK')
const[gdp,setGdp]=useState('5')

    const changeContry=()=>{
        setContry('India')
    }

    return (
       <>
       <p>contry :[funcation base componate ] {contryname}</p>
       <button onClick={()=> changeContry()}>change</button>
        <p>Gdp:{gdp}</p>
        <button onClick={()=> setGdp(10)}>change</button>
       </>
    );
}

export default State;