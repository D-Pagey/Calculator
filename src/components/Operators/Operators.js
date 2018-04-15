import React from 'react';

import './Operators.css';

function Operators() {
    return (
        <div className='operator-container'>
          <button className='operator'>+</button>
          <button className='operator'>-</button>
          <button className='operator'>*</button>
          <button className='operator'>/</button>
        </div>
    )
}

export default Operators;