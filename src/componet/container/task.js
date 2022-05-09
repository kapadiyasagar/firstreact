import React, { useState } from 'react';
import Course from './course';

function Branch(props) {

    const [branchname,setBranch]=useState('Rw-1')
    const[course,setcours]=useState('android')

    const Coursechange=()=>{
        setBranch('rw-2')
        setcours('node-js')
    }

    return (
        <>
            <p>Branch{branchname}</p>
            <button onClick={()=>Coursechange()}>change</button>

            <Course coursname={branchname}/>
        </>
    );

}
export default Branch; 