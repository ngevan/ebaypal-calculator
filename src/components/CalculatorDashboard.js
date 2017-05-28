import React from 'react';
import CalculatorForm from './CalculatorForm';
import CalculatorResult from './CalculatorResult';

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

  handleFormSubmit = (listing) => {
    this.calculateEbayFee(listing);
    this.calculatePaypalFee(listing);
    this.calculateNetProfit(listing);
  };

  calculateEbayFee = (listing) => {
    let ebayFee = parseFloat((listing.soldPrice * 0.1) + (listing.shipCharge * 0.1)).toFixed(2);
    this.setState({
      ebayFee: ebayFee,
    });
  };

  calculatePaypalFee = (listing) => {
    let paypalFee = parseFloat(((listing.soldPrice + listing.shipCharge) * 0.029) + 0.30).toFixed(2);
    this.setState({
      paypalFee: paypalFee,
    });
  };

  calculateNetProfit = (listing) => {
    let grossRevenue = parseFloat(listing.soldPrice + listing.shipCharge - listing.shipCost - listing.itemCost);
    let netProfit = parseFloat(grossRevenue - this.state.ebayFee - this.state.paypalFee).toFixed(2);
    this.setState({
      netProfit: netProfit,
    });
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
