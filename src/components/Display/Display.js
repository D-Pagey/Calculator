import React from 'react';

import './Display.css';

function Display(props) {
    return (
        <div className='display-container'>
            <p className='display'>{props.answer}</p>
            <button className='clear' onClick={props.clear}>Clear</button>
        </div>
    )
}

export default Display;
