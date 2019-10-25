import React from 'react';

const Input = () => {
  return (
    <div className='location-container'>
      <label htmlFor='city' className='location'>LOCATION
        <form>
          <input 
            type='text'
            name='city'
            className='input-box'
          />
        </form>
      </label>
      <span className='set'>SET</span>
    </div>
  )
}

export default Input