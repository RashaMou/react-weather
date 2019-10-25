import React from 'react';
import mostlyCloudy from './../icons/mostlyCloudy.png'

const WeatherCard = () => {
  return (
    <div className='weather-card box'>
      <img className='icon' src={mostlyCloudy} alt='mostly cloudy'/>
      <div className='weather-info'>
        <span className='temp title'>70&deg;</span>
        <span className='weather-descripton'>Mostly Cloudy</span>
        <span className='date'>June 20, 2019</span>
      </div>
    </div>
  )
}

export default WeatherCard