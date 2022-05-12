import React, { useEffect, useState } from 'react';

function Timefun(props) {
    const [Time, setTime] = useState(new Date());


    const tick = () => {
        setTime(new Date())
    }

    useEffect(
        () => {
            const timeId = setInterval(() => tick(), 1000);

            return () => {
                clearInterval(timeId);
            }
        },
        [Time]
    )

    return (
        <div>
            {Time.toLocaleString()}
        </div>
    );
}

export default Timefun;