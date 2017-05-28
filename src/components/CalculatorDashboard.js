import React from 'react';
import CalculatorForm from './CalculatorForm';

class CalculatorDashboard extends React.Component {
  state = {
    soldPrice: 0,
    shipCharge: 0,
    shipCost: 0,
    itemCost: 0,
    ebayFee: 0,
    paypalFee: 0,
    netProfit: 0,
  };

  render() {
    return (
      <div>
        <div>
          <CalculatorForm
            soldPrice={this.state.soldPrice}
            shipCharge={this.state.shipCharge}
            shipCost={this.state.shipCost}
            itemCost={this.state.itemCost}
          />
        </div>
      </div>
    );
  }
}

export default CalculatorDashboard;
