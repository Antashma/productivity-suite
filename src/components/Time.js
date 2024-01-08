import { useEffect } from "react"

function Time(props) {
  const {timerData, currentDuration, setCurrentDuration, on, setOn } = props;

  useEffect(() => {
    let timer;
    if (on) {
       timer = setInterval(() => {
        countDown(currentDuration)
    }, 1000)
    }

    return () => clearInterval(timer)
  }, [on, currentDuration])


  function countDown({minutes, seconds}) {
    let newMinutes = minutes;
    let newSeconds = seconds;
    if (minutes === 0 && seconds === 0) {
      setOn(false)
    } else if (seconds === 0) { 
      newSeconds = 59;
      newMinutes -= 1;
    } else newSeconds -= 1
    setCurrentDuration({seconds: newSeconds, minutes: newMinutes})
  } 

  const timeStyle = {
    fontSize: "6rem",
    fontWeight: "bold",
    fontStyle: "italic",
    letterSpacing: "0.5rem",
}

  return ( 
    <p style={timeStyle}>{currentDuration.minutes < 10 ? "0" + currentDuration.minutes : currentDuration.minutes} : {currentDuration.seconds < 10 ? "0" + currentDuration.seconds : currentDuration.seconds}</p>
    );
}

export default Time;