import { useEffect, useState } from "react";


const SimpleCounter = () => {
    const [IntervalId, setIntervalId] = useState(0);
    const [count, setCount] = useState(0);

    const initInterval = () => {
        const id = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000); setIntervalId(id);
    };

    useEffect(() => {
        initInterval()
    }, []);

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="row d-flex justify-content-center ">
                    <div className="segundos d-flex">
                        <p>0</p>
                        <p>0</p>
                    </div>
                    <div className="minutos d-flex">
                        <p>0</p>
                        <p>{count}</p>
                    </div>
                </div>
            </div>
        </>
    )

}


export default SimpleCounter;