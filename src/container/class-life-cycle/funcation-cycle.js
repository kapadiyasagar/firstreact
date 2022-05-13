import React, { Component, useEffect, useState } from 'react';

function Timefun(props) {
    const [time, settime] = useState(new Date());


    const tick = () => {
        settime(new Date())
    }
    useEffect(() => {

        // Componentdidmount,componentupdate

        const timeid = setInterval(() => tick(), 1000);

        return()=>{

            // componentwillumount
            clearInterval(timeid)
        }
    },
    [time]
    )

    return (
        <div>
            {time.toLocaleString()}

        </div>
    );
}

export default Timefun;