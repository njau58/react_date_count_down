import React from 'react'
import Timer from './timer'
import classes from './counter.module.css'
import {useState, useEffect} from 'react'


const Counter = (props) =>{

 

    const countDate = new Date("May 28, 2030 00:00:00")
    const dateCount = countDate.getTime()
    const now = new Date()
    const timeNow = now.getTime()
    const gap = dateCount - timeNow 

  const naturalSecond = 1000
  const naturalMinute = naturalSecond * 60
  const naturalHour =  naturalMinute * 60
  const naturalDay = naturalHour  * 24

  const displayDay = Math.floor(gap/naturalDay)
  const displayHour = Math.floor((gap % naturalDay)/ naturalHour)
  const displayMinute = Math.floor((gap % naturalHour)/ naturalMinute)
  const displaySecond = Math.floor((gap % naturalMinute)/ naturalSecond)


    const [time, setTime] = useState({})


const {day, hour, minute, second}  = time

useEffect(()=>{

    const timer = setTimeout(()=>{
        setTime({   
        day:'Day(s)',
        hour:'Hour(s)',
        minute:'Minute(s)',
        second:'Second(s)'
    })
    } , 1000)
    return () => clearTimeout(timer);
})
    
    return (
        <div className={classes.container}>
        <Timer day={day} hour={hour} minute={minute} second={second}
         naturalDay={displayDay}
         naturalHour={displayHour}
         naturalMinute={displayMinute}
         naturalSecond={displaySecond}

         />
       
     
            
        </div>
    )

}

export default Counter


