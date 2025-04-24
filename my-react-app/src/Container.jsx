import { useState, useEffect } from "react";
import { randomNameStore } from "./randomName";
import Greeting from "./Greeting";
import Clock from "./Clock";
import Header from "./Header";
import './Container.css'
function Container() {  
    const [name, setName] = useState(randomNameStore.chooseName());
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setName(randomNameStore.chooseName());
        }, 10000);
        
        return () => clearTimeout(timer);
    }, [name]);
    
    return (
        <div className="container">
            <Header />
            <Greeting name={name}/>
            <Clock />
            <img src="src\assets\dogSmile.jpg" alt="dog" className="dogImg"/>
        </div>
    );
}
export default Container