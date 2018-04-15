import React from 'react';

import './Numbers.css';

function Numbers() {
    return (
        <div className='numbers-container'>
          <button className='number'>7</button>
          <button className='number'>8</button>
          <button className='number'>9</button>
          <button className='number'>4</button>
          <button className='number'>5</button>
          <button className='number'>6</button>
          <button className='number'>1</button>
          <button className='number'>2</button>
          <button className='number'>3</button>
          <button className='number'>0</button>
          <button className='symbol'>.</button>
          <button className='symbol'>=</button>
        </div>
    )
}

export default Numbers;