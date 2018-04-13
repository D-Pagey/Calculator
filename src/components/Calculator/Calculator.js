import React from 'react';

import './Calculator.css';
import Display from '../Display';
import Operators from '../Operators';
import Numbers from '../Numbers';

function Calculator() {
    return (
        <main className='calculator'>
            <Display />
            <Operators />
            <Numbers />
        </main>
    )
}

export default Calculator;