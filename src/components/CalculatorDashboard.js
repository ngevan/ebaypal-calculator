import React from 'react';
import CalculatorForm from './CalculatorForm';
import CalculatorResult from './CalculatorResult';

class CalculatorDashboard extends React.Component {
  state = {
    fields: {
      soldPrice: 0,
      shipCharge: 0,
      shipCost: 0,
      itemCost: 0,
    },
    ebayFee: 0,
    paypalFee: 0,
    netProfit: 0,
  };

  handleFormSubmit = (listing) => {
    this.calculateNetProfit(listing);
  };

  calculateNetProfit = (listing) => {
    let grossRevenue = listing.soldPrice + listing.shipCharge - listing.shipCost - listing.itemCost;
    let ebayFee = ((listing.soldPrice * 0.1) + (listing.shipCharge * 0.1)).toFixed(2);
    let paypalFee = (((listing.soldPrice + listing.shipCharge) * 0.029) + 0.30).toFixed(2);
    let netProfit = (grossRevenue - ebayFee - paypalFee).toFixed(2);
    this.setState({
      ebayFee: ebayFee,
      paypalFee: paypalFee,
      netProfit: netProfit,
    });
  };

  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <CalculatorForm
            soldPrice={this.state.fields.soldPrice}
            shipCharge={this.state.fields.shipCharge}
            shipCost={this.state.fields.shipCost}
            itemCost={this.state.fields.itemCost}
            onFormSubmit={this.handleFormSubmit}
          />

          <CalculatorResult
            ebayFee={this.state.ebayFee}
            paypalFee={this.state.paypalFee}
            netProfit={this.state.netProfit}
          />
        </div>
      </div>
    );
  }
}

export default CalculatorDashboard;
