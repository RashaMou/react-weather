import React, { useState } from 'react';
import Input from './components/Input';
import WeatherCard from './components/WeatherCard';
import axios from 'axios';
import { reset } from 'ansi-colors';

function App() {

  const[city, setCity] = useState('') 
  
  //weather state from API 
  const[description, setDescription] = useState('')
  const[temp, setTemp] = useState('')
  const[icon, setIcon] = useState('')
  const[place, setPlace] = useState('')
  const apiKey = 'acb48d94d25a3f640a71be445fa0b204'
  
  const handleChange = (event) => {
    setCity(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`)
      .then (res => {
        setDescription(res.data.weather[0].description)
        const farenheit = (res.data.main.temp - 273.15) * 9/5 + 32
        setTemp(farenheit)
        setIcon(res.data.weather[0].icon) 
        setPlace(`${res.data.name}, ${res.data.sys.country}`)   
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
        <Input  onSubmit={handleSubmit} onChange={handleChange}/>
        <WeatherCard temp={temp} description={description} place={place} icon={icon}/>
      </div>
    </div>
  );
}

export default App;
