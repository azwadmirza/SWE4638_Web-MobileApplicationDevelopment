import { useEffect, useState } from "react";

const TimerFunctional = () => {
    const [time,setTime]=useState({hours:0,minutes:0,seconds:0});

    const tick=()=>{
        time.seconds++;
        if(time.seconds===60){
            time.minutes++;
            time.seconds=0;
            if(time.minutes===60){
                time.hours++;
                time.minutes=0;
            }
        }
        setTime({...time});
    }

    useEffect(()=>{
        const interval = setInterval(()=>tick(),1000);
        return () => clearInterval(interval);
    },[]);

    return ( 
        <div>
            <h1>Timer</h1>
            <p>Time: {time.hours<10?"0"+time.hours:time.hours}:{time.minutes<10?"0"+time.minutes:time.minutes}:{time.seconds<10?"0"+time.seconds:time.seconds}</p>
        </div>
     );
}
 
export default TimerFunctional;