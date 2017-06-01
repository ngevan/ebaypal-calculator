import React, { Component } from 'react';
import Header from './components/Header';
import CalculatorDashboard from './components/CalculatorDashboard';
import './App.css';
import './semantic-ui/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div className='ui text container'>
        <Header />
        <CalculatorDashboard />
      </div>
    );
  }
}

export default App;
