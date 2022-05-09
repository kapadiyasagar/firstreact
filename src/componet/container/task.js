import React, { useState } from 'react';

function changes(props) {

    const [branchname,setBranch]=useState('Rw-1')
    const[branchcourse,setcours]=useState('android')

    const changeContry=()=>{
        setBranch('rw-2')
        // setcours('node-js')
    }

    return (
        <div>
            <p>Branch{branchname}</p>
            <button onClick={()=>changeContry()}>change</button>
        </div>
    );

}
export default changes;