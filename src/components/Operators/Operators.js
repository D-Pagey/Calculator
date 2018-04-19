import React from 'react';

import './Operators.css';

function Operators(props) {
    return (
        <div className='operator-container'>
          <button className='operator' onClick={props.handleClick}>+</button>
          <button className='operator' onClick={props.handleClick}>-</button>
          <button className='operator' onClick={props.handleClick}>*</button>
          <button className='operator' onClick={props.handleClick}>/</button>
        </div>
    )
}

export default Operators;