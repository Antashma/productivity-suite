import { useEffect, useState } from "react";
import "./style.css"
import getDateTime from "./getDateTime.js"


function Clock() { 
    const [currentDate, setCurrentDate] = useState({
        time: null,
        dayName: null,
        dayNum: null,
        monthName: null,
        monthNum: null,
        year: null
    });
  
    
    useEffect(() => {
        const timer = setInterval(() => {
            const update = getDateTime();
            setCurrentDate({
                time: update.time,
                dayName: update.dayName,
                dayNum: update.dayNum,
                monthName: update.monthName,
                monthNum: update.monthNum,
                year: update.year
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])
    
    
    
    return ( 
        <section className="clock--container">
            {currentDate.time && currentDate.dayName ? (
            <div className="clock--text-container">
                <div className="clock--day-text">
                    <p>{currentDate.dayName}, {currentDate.monthName} {currentDate.dayNum} of {currentDate.year}</p>
                </div>

                <p className="clock--time-text">{currentDate.time}</p>
       
            </div> ) 
            : <p className="clock--loading-text">loading clock...</p>}
        </section> 
        );
}

export default Clock;