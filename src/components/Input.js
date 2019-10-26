import React, { useState } from 'react';

const Input = (props) => {
  return (
    <div className='location-container'>
      <form onSubmit={props.onSubmit} className='form'>
        <label htmlFor='city' className='location'>LOCATION
            <input 
              type='text'
              name='city'
              className='input-box'
              onChange={props.onChange}
              placeholder='Enter city'
            />  
          </label>
          {/* <button type='submit' className='set button'>SET</button> */}
      </form>
    </div>
  )
}

export default Input