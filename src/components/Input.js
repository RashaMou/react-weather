import React from 'react';

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
      </form>
      <span className='unit' onClick={props.toFarenheit}>F&deg;</span><span className='bar'>|</span><span className='unit' onClick={props.toCelcius}>C&deg;</span>
    </div>
  )
}

export default Input