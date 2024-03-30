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


  return ( 
    <p className="time--container">{currentDuration.minutes < 10 ? "0" + currentDuration.minutes : currentDuration.minutes}:{currentDuration.seconds < 10 ? "0" + currentDuration.seconds : currentDuration.seconds}</p>
    );
}

export default Time;