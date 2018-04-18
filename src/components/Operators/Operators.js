import React from 'react';

import './Operators.css';

function Operators(props) {
    return (
        <div className='operator-container'>
          <button className='operator' onClick={this.props.handleClick}>+</button>
          <button className='operator'>-</button>
          <button className='operator'>*</button>
          <button className='operator'>/</button>
        </div>
    )
}

export default Operators;