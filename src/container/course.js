import React from 'react';

function Coursname({ changecourse }) {
    let course = "";

    debugger

    if (changecourse === "rw1") {
        course = "android";
    }
    
    else if(changecourse==="rw2"){
        course="node-js";
    }
    else if(changecourse === "rw3"){
        course="react-js";
    }
    else if(changecourse==="rw4"){
        course="flutter";
    }
    else if(changecourse==="rw5"){
        course="ios";
    }
    else {
        // course = "invalid"
    }


    return (
        <div>
            <div>
                course-{course}</div>
        </div>
    );
}

// function Course({coursname}) {

//     // single

//     return(
//         <>

//         {
//             coursname==='rw-1' ?<p>coursname:android</p>:<p>coursname:node js</p>
//         }
//         </>
//     )
// }
export default Coursname;