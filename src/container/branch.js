import React, { useState } from 'react';
import Coursname from './course';

function Branchname(props) {
    
    <br></br>

    const [branch, setbranch] = useState('rw1');

    const branchrw1 = () => {
        setbranch('rw1');
    }
    const branchrw2 = () => {
        setbranch('rw2');
    }
    const branchrw3 = () => {
        setbranch('rw3');
    }
    const branchrw4 = () => {
        setbranch('rw4');
    }

    return (
        <div>
            <div>Branch name:{branch}</div>
            <Coursname changecourse={branch} />
            <button onClick={() => branchrw1()}>rw1</button>
            
            <button onClick={() => branchrw2()}>rw2</button>
            <button onClick={() => branchrw3()}>rw3</button>
            <button onClick={() => branchrw4()}>rw4</button>
        </div>
    );
}



// single

// function Branch(props) {

//     const[branchname,setbranch]=useState('rw-1')
//     const[course,setcours]=useState('android')

//     const Coursechange=()=>{
//         setbranch('rw-2')
//         setcours('node-js')
//     }


//     return (    
//         <div>
//             <p>Branch  {branchname}</p>
//             <button onClick={()=>Coursechange()}>Change</button>

//             <Course coursname={branchname}/>

//         </div>
//     );
// }

export default Branchname;