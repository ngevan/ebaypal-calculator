import React, { Component } from 'react';
import Header from './components/Header';
import CalculatorDashboard from './components/CalculatorDashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CalculatorDashboard />
      </div>
    );
  }
}

export default App;
