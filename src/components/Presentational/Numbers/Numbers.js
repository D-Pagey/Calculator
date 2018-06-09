import React from 'react';

import './Numbers.css';

function Numbers({handleClick, evaluate}) {
    return (
        <div className='numbers-container'>
          <button className='number' onClick={handleClick}>7</button>
          <button className='number' onClick={handleClick}>8</button>
          <button className='number' onClick={handleClick}>9</button>
          <button className='number' onClick={handleClick}>4</button>
          <button className='number' onClick={handleClick}>5</button>
          <button className='number' onClick={handleClick}>6</button>
          <button className='number' onClick={handleClick}>1</button>
          <button className='number' onClick={handleClick}>2</button>
          <button className='number' onClick={handleClick}>3</button>
          <button className='number' onClick={handleClick}>0</button>
          <button className='symbol' onClick={handleClick}>.</button>
          <button className='symbol' onClick={evaluate}>=</button>
        </div>
    )
}

export default Numbers;