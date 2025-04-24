import { useEffect, useState, useRef } from "react"
import './Greeting.css'
function Greeting({name}) {
    const [greetingText, setGreetingText] = useState(`Привет, ${name}!`)
    const prevName = useRef(name); 
    useEffect(() => {
        if(prevName.current !== name){
            setGreetingText(`Привет, у тебя поменялось имя, теперь ты ${name}!`)
            prevName.current = name;
        }    
    }, [name])
    return (
        <div className="greeting_container">
        <p>{greetingText}</p>
        </div>
    )
}

export default Greeting