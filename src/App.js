import React from 'react';
import Input from './components/Input';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <div className="app-container">
      <header className='header'>
        <h1 className='title'>My Weather App</h1>
      </header>
      <div className='inner-flex-container'>
        <Input />
        <WeatherCard />
      </div>
    </div>
  );
}

export default App;
