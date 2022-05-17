
import React, { useState } from 'react';

function Counter(props) {

    const[Counter,setCounter]=useState(0);

    const AddCounter=()=>{
        if(Counter<10){
            setCounter(Counter+1)
        }
    };

    const Removecount=()=>{
        if(Counter>0){
        setCounter(Counter-1);
    }
};

    return (
        <div>
            <h3>{Counter}</h3>
         <button onClick={()=>AddCounter()}>add</button>

         <button onClick={()=> Removecount()}>remove</button>
        </div>
    );
}

export default Counter;