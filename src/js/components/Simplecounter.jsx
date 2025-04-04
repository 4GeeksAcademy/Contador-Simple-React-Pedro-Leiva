import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";


const SimpleCounter = () => {
    const [count, setCount] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const id = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        setIntervalId(id)

        return () => clearInterval(id);
    }, []);


    useEffect(() => {
        if (count === 59) {
            setMinutos((prevCount) => prevCount + 1);
            setCount(0);
        }
    }, [count]);

    const start = () => {
        if (intervalId) return;
        const id = setInterval(() => {
            setCount((prevCount) => prevCount + 1)
        }, 1000);
        setIntervalId(id);

    }

    const stop = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null)
        }

    };

    const reStart = () => {
        clearInterval(count)
        setCount(0)
        setMinutos(0)
    };



    return (
        <>
            <div className="father d-flex justify-content-center">
                <div className="child row d-flex justify-content-center ">
                    <div className="icon"><FaRegClock /></div>
                    <div className="minutos d-flex">
                        <p>{minutos < 10 ? "0" + minutos : minutos}</p>
                    </div>
                    <div className="segundos d-flex">
                        <p>{count < 10 ? "0" + count : count}</p>
                    </div>
                    <div>
                        <button onClick={start}>Start</button>
                        <button onClick={stop}>Stop</button>
                        <button onClick={reStart}>Restart</button>

                    </div>
                </div>
            </div>
        </>
    )

}


export default SimpleCounter;