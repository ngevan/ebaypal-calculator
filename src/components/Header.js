import React from 'react';
import logo from '../logo.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="ui centered huge header">
        <img src={logo} className="App-logo" alt="React logo" />
        <h1 className="">eBayPal Calculator</h1>
      </div>
    );
  }
}

export default Header;
