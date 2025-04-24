import { useState, useEffect } from "react";
import './Clock.css'

function Clock() {
    const [date, setDate] = useState(new Date().toLocaleString());
    const [showMinuteMessage, setshowMinuteMessage] = useState(false)
    useEffect(() => {
        const interval = setInterval(() => {
            let dateNow = new Date();
            const minutes = dateNow.getMinutes();
            setDate(dateNow.toLocaleString());
            setshowMinuteMessage(minutes % 5 === 0)
        }, 1000);        
        return () => clearInterval(interval); 
    }, []);
    
    return (
        <>
        <p>Текущие дата и время: {date}</p>
        {showMinuteMessage && (
            <p className="secretText">Текущие минуты кратны 5!</p>
        )}
        </>   
    )
}
export default Clock