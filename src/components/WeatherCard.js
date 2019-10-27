import React from 'react';

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
  
  // console.log(formatDate(new Date()));
  const date = Date.now
  return (
    <div className='box-container'>
      {props.data.icon ?  
        <div className='weather-card box'>
      <img className='icon' src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`} alt={props.data.description}/>
      <div className='weather-info'>
        <span className='temp title'>{Math.round(props.data.temp)}&deg;</span>
        {props.data.description == "scattered clouds" || props.data.description == "overcast clouds" ? <span className='weather-descripton scattered-margin'>{props.data.description}</span> : <span className='weather-descripton'>{props.data.description}</span>}
        <span className='place'>{props.data.place}</span>
        <span className='date'>{formatDate(new Date())}</span>
      </div>
      </div> : <div className='empty'></div>} 
      </div>  
  )
}

export default WeatherCard