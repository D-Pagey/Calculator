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
            display: 0
          }

        this.handleNumberClicks = this.handleNumberClicks.bind(this);
        this.handleOperatorClicks = this.handleOperatorClicks.bind(this);
        this.evaluate = this.evaluate.bind(this);
        this.resetCalculator = this.resetCalculator.bind(this);
        this.handleEqualsClick = this.handleEqualsClick.bind(this);
    }

    resetCalculator() {
      this.setState({
        operand1: '',
        operand2: '',
        mode: 1,
        operator: '',
        display: 0
      })
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
      if (this.state.mode === 1) {
        this.setState({
            operator: e.target.innerHTML,
            mode: 2
        });
      } else {
        this.evaluate(e);
      }
    }

    handleEqualsClick() {
      this.evaluate();
      this.setState({
        mode: 1,
        operand1: ''
      });
    }

    evaluate(e) {
        this.setState({
            display: eval(this.state.operand1 + this.state.operator +
                this.state.operand2),
            mode: 2,
            operand1: eval(this.state.operand1 + this.state.operator +
                this.state.operand2),
            operand2: '',
            operator: e ? e.target.innerHTML : ''
        })
    }

    render() {
        return (
            <main className='calculator'>
                <Display answer={this.state.display} clear={this.resetCalculator} />
                <Operators handleClick={this.handleOperatorClicks}/>
                <Numbers
                handleClick={this.handleNumberClicks}
                evaluate={this.handleEqualsClick} />
            </main>
        )
    }
}

export default Calculator;
