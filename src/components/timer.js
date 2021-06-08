import React from 'react'
export default function timer(props) {
    return (
        <>
        <div >
         <h3>{props.naturalDay}</h3>
          <h3>{props.day}</h3>   
        </div>
        <div >
         <h3>{props.naturalHour}</h3>
          <h3>{props.hour}</h3>   
        </div>
        <div >
         <h3>{props.naturalMinute}</h3>
          <h3>{props.minute}</h3>   
        </div>
        <div >
         <h3>{props.naturalSecond}</h3>
          <h3>{props.second}</h3>   
        </div>
        </>
    )
}
