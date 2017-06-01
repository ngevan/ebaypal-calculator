import React from 'react';

class CalculatorResult extends React.Component {
  render() {
    return (
      <div>
        <div className="ui horizontal divider">
          FINAL
        </div>
          <h3>eBay Fee: ${this.props.ebayFee}</h3>
          <h3>PayPal Fee: ${this.props.paypalFee}</h3>
          <h3>Net Profit: ${this.props.netProfit}</h3>
      </div>
    );
  }
}

export default CalculatorResult;
