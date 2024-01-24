import { useEffect, useState } from "react";
import swayingFlowersImg from "../../images/swaying-flowers.gif";


function Clock() { 
    const [currentDate, setCurrentDate] = useState({
        time: null, 
        day: null
    });
  
    
    useEffect(() => {
        const timer = setInterval(() => {
            const update = getDateTime();
            setCurrentDate(prev => {
                return {
                    ...prev,
                    day: update.day,
                    time: update.time,
                    date: update.dateNum,
                    month: update.month,
                    year: update.year
                }
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])
    
    function getDateTime() {
        const date = new Date();

        //TIME
        let hour = date.getHours();
        let minute = date.getMinutes();
        let seconds = date.getSeconds();
        //format time
        if (hour > 12) hour -= 12;
        if (hour < 10) hour = "0" + hour;
        if (minute < 10) minute = "0" + minute;
        if (seconds < 10) seconds = "0" + seconds;

        const time =  `${hour}:${minute}:${seconds}`;

        //configure day
        const weekArr = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        const day = weekArr[date.getDay()];

        //configure month
        //const monthArr = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        const month = date.getMonth() + 1;

        //configure day of month

        const dateNum = date.getDate();
        const year = date.getFullYear();
        
        return {time, day, month, dateNum, year};
    }

    const timeStyle = {
        fontSize: "6rem",
        fontWeight: "bold",
        fontStyle: "italic",
        color:"white",
        textShadow: "2px 2px 5px rgb(205 110 177)",
        letterSpacing: "0.5rem",
    }

    const dayStyle = {
        fontSize: "3rem",
        fontStyle: "italic",
        color:"white",
        textShadow: "2px 2px 5px rgb(205 110 177)",
    }

    const clockContainerStyle = {
        background: `url(${swayingFlowersImg}) center`,
        width: "80vw",
        height: "200px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignContent: "space-around",
        alignItems: "center"
    }

    const clockTextContainerStyle = {
        display:"flex",
    }

    const loadingStyle = {
        fontSize: "3rem",
        fontStyle: "italic",
        color:"white",
        textShadow: "2px 2px 5px rgb(205 110 177)",

    }
    
    return ( 
        <section style={clockContainerStyle}>
            {currentDate.time && currentDate.day ? (
            <div style={clockTextContainerStyle}>
                <p style={timeStyle}>{currentDate.time}</p>
                <div style={dayStyle}>
                    <p>its {currentDate.day}</p>
                    <p>{currentDate.month}/{currentDate.date}</p>
                </div>
            </div> ) 
            : <p style={loadingStyle}>loading clock...</p>}
        </section> 
        );
}

export default Clock;