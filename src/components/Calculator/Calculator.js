import React from 'react';

import './Calculator.css';
import Display from '../Display';
import Operators from '../Operators';
import Numbers from '../Numbers';

function Calculator(props) {
    return (
        <main className='calculator'>
            <Display />
            <Operators handleClick={this.props.handleClick}/>
            <Numbers />
        </main>
    )
}

export default Calculator;