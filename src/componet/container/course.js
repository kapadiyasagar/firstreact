import React from 'react';

function Course({coursname}) {
    return (
        <>
         {
             coursname==='Rw-1' ?<p>coursname:android</p> : <p>coursname:node js</p>
         }   
        </>
    );
}

export default Course;