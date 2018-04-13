import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Calculator from './components/Calculator';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Calculator />
      </div>
    );
  }
}

export default App;