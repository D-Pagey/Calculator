import React from 'react';

import './Numbers.css';

function Numbers(props) {
    return (
        <div className='numbers-container'>
          <button className='number' onClick={props.handleClick}>7</button>
          <button className='number' onClick={props.handleClick}>8</button>
          <button className='number' onClick={props.handleClick}>9</button>
          <button className='number' onClick={props.handleClick}>4</button>
          <button className='number' onClick={props.handleClick}>5</button>
          <button className='number' onClick={props.handleClick}>6</button>
          <button className='number' onClick={props.handleClick}>1</button>
          <button className='number' onClick={props.handleClick}>2</button>
          <button className='number' onClick={props.handleClick}>3</button>
          <button className='number' onClick={props.handleClick}>0</button>
          <button className='symbol' onClick={props.handleClick}>.</button>
          <button className='symbol' onClick={props.handleClick}>=</button>
        </div>
    )
}

export default Numbers;