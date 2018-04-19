import React, { Component } from 'react';

import './Calculator.css';
import Display from '../Display';
import Operators from '../Operators';
import Numbers from '../Numbers';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            operand1: 1,
            operand2: '',
            mode: '',
            operator: '',
            answer: ''
          }

    this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState(prevState => ({
            operand1: prevState.operand1 + 1
        }))
    }

    render() {
        return (
            <main className='calculator'>
                <Display />
                <Operators handleClick={this.handleClick} />
                <Numbers handleClick={this.handleClick} />
            </main>
        )
    }
}

export default Calculator;