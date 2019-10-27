import React, { useState } from 'react';
import Input from './components/Input';
import WeatherCard from './components/WeatherCard';
import axios from 'axios';
import { reset } from 'ansi-colors';

function App() {

  const[city, setCity] = useState('') 
  
  //weather state from API 
  const[data, setData] = useState({
    description: '',
    temp: '',
    icon: '',
    place: ''
  })
  const apiKey = 'acb48d94d25a3f640a71be445fa0b204'
  
  const handleChange = (event) => {
    setCity(event.target.value)
  }

  const toCelcius = (f) => {   
    setData({...data, temp: (f - 32) * 5/9})
  }

  const toFarenheit = (c) => {
    setData({...data, temp: (c * 9/5) + 32})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`)
      .then (res => {
        const farenheit = (res.data.main.temp - 273.15) * 9/5 + 32
        setData({
          description: res.data.weather[0].description,
          temp: farenheit,
          icon: res.data.weather[0].icon,
          place: `${res.data.name}, ${res.data.sys.country}`
        }) 
      })
      .catch (err => {
        console.log(err)
      }, [])
  }

  return (
    <div className="app-container">
      <header className='header'>
        <h1 className='title'>Hey I made a weather app!</h1>
      </header>
      <div className='inner-flex-container'>
        <Input onSubmit={handleSubmit} onChange={handleChange} toCelcius={() => toCelcius(data.temp)} toFarenheit={() => toFarenheit(data.temp)}/>
        <WeatherCard data={data} />
      </div>
    </div>
  );
}

export default App;

