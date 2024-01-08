import Time from "../components/Time";
import { useEffect, useState } from "react";
import {presetTimers} from "../data/timer";


const initialTimer = {
    id: "default",
    name: "default",
    duration: 10
}

function Timer() {
    const [timer, setTimer] = useState(initialTimer)
    const [timerIsOn, setTimerIsOn] = useState(false)
    const [currentDuration, setCurrentDuration] = useState({minutes: timer.duration, seconds:0});

    const displayPresetTimers = presetTimers.map(preset => {
        return <h3 key={preset.id} onClick={() => setTimer(preset)}>{preset.name}</h3>
    })

    useEffect(() => {
        setCurrentDuration({minutes: timer.duration, seconds: 0})
    }, [timer])

    return (
        <div>
            <header>
                <h2>Timer</h2>
                <p>set for focus or breaks</p>
            </header>
            <main>
                <section>
                    {displayPresetTimers}
                </section>

                <Time 
                    currentDuration={currentDuration}
                    setCurrentDuration={setCurrentDuration}
                    on={timerIsOn}
                    setOn={setTimerIsOn}
                    timerData={timer}
                />

                <button 
                    onClick={() => setTimerIsOn(!timerIsOn)}
                >
                    {!timerIsOn ? "Start" : "Pause"}
                </button>
                <button onClick={() => setCurrentDuration({minutes: timer.duration, seconds: 0})}>Reset</button>
            </main>
        </div>
        );
}

export default Timer;
