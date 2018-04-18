import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      operand1: '',
      operand2: '',
      mode: '',
      operator: '',
      answer: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Calculator handleClick={this.handleClick}/>
        <Footer />
      </div>
    );
  }
}

export default App;
