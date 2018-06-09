import React from 'react';

import './Operators.css';

function Operators({handleClick}) {
    return (
        <div className='operator-container'>
          <button className='operator' onClick={handleClick}>+</button>
          <button className='operator' onClick={handleClick}>-</button>
          <button className='operator' onClick={handleClick}>*</button>
          <button className='operator' onClick={handleClick}>/</button>
        </div>
    )
}

export default Operators;