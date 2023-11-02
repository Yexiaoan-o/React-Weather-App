import React from 'react'

function Weather({date, icon, temp}) {
  const day = new Date(date) 
  // console.log(day); Thu Nov 02 2023 15:00:00 GMT+0800 (China Standard Time)
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeekIndex = day.getDay()
  const dayOfWeek = daysOfWeek[dayOfWeekIndex]

  return (
    <div className='weather'>
      <span className='day'>{dayOfWeek}</span>
      <img className='weather-icon' src={ `../images/${icon}.svg`}></img>
      <span className='tem'>{temp}℉</span>
    </div>
  )
}

export default Weather