import React, { Component } from 'react';

import './Calculator.css';
import Display from '../Display';
import Operators from '../Operators';
import Numbers from '../Numbers';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            operand1: '',
            operand2: '',
            mode: 1,
            operator: '',
            display: ''
          }

        this.handleNumberClicks = this.handleNumberClicks.bind(this);
        this.handleOperatorClicks = this.handleOperatorClicks.bind(this);
        this.evaluate = this.evaluate.bind(this);
    }

    handleNumberClicks(e) {
        if (this.state.mode === 1) {
            this.setState({ 
                operand1: this.state.operand1 + e.target.innerHTML,
                display: this.state.operand1 + e.target.innerHTML
            })
        } else {
            this.setState({ 
                operand2: this.state.operand2 + e.target.innerHTML,
                display: this.state.operand2 + e.target.innerHTML
            })
        }
    }

    handleOperatorClicks(e) {
        this.setState({ 
            operator: e.target.innerHTML,
            mode: 2
        })
    }

    evaluate() {
        this.setState({
            display: eval(this.state.operand1 + this.state.operator + 
                this.state.operand2),
            mode: 1,
            operand1: ''
        })
    }

    render() {
        return (
            <main className='calculator'>
                <Display answer={this.state.display}/>
                <Operators handleClick={this.handleOperatorClicks}/>
                <Numbers 
                handleClick={this.handleNumberClicks} 
                evaluate={this.evaluate} />
            </main>
        )
    }
}

export default Calculator;