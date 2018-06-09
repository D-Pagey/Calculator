import React from 'react';

import './Display.css';

function Display({answer, clear}) {
    return (
        <div className='display-container'>
            <p className='display'>{answer}</p>
            <button className='clear' onClick={clear}>Clear</button>
        </div>
    )
}

export default Display;
