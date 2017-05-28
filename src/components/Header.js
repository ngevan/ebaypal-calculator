import React from 'react';
import logo from '../logo.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="">eBayPal Calculator</h1>
      </div>
    );
  }
}

export default Header;
