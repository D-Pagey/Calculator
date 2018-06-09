import React from 'react';

import './App.css';
import Modal from './components/Container/Modal';
import Header from './components/Presentational/Header';
import Calculator from './components/Container/Calculator';
import Footer from './components/Presentational/Footer';

function App() {
    return (
      <div className="app">
        <Modal />
        <Header />
        <Calculator />
        <Footer />
      </div>
    );
  }

export default App;
