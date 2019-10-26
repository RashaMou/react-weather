import React from 'react';
import mostlyCloudy from './../icons/mostlyCloudy.png'

const WeatherCard = (props) => {

  function formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return (`${monthNames[monthIndex]} ${day} ${year}`);
  }
  
  console.log(formatDate(new Date()));
  const date = Date.now
  return (
    <div className='weather-card box'>
      <img className='icon' src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt='weather icon'/>
      <div className='weather-info'>
        <span className='temp title'>{Math.round(props.temp)}&deg;</span>
        <span className='weather-descripton'>{props.description}</span>
        <span className='place'>{props.place}</span>
        <span className='date'>{formatDate(new Date())}</span>
      </div>
    </div>
  )
}

export default WeatherCard