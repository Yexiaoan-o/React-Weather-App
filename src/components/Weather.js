import React from 'react'
import icon03d from "../images/03d.svg";

function Weather() {
  return (
    <div className='weather'>
      <span className='day'>Friday</span>
      <img className='weather-icon' src={icon03d}></img>
      <span className='tem'>21℃</span>
    </div>
  )
}

export default Weather