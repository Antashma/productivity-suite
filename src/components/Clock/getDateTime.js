export default function getDateTime() {

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
    
    //configure day and number
    const weekArr = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const dayName = weekArr[date.getDay()];
    const dayNum = date.getDate();
    
    //configure month number and name
    const monthArr = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    const monthNum = date.getMonth();
    const monthName = monthArr[monthNum]
    
    //configure year
    const year = date.getFullYear();
    
    return {time, dayName, monthName, monthNum, dayNum, year}

}
