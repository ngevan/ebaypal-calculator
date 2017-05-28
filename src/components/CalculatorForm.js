import React from 'react';

class CalculatorForm extends React.Component {
  state = {
    soldPrice: this.props.soldPrice || '',
    shipCharge: this.props.shipCharge || '',
    shipCost: this.props.shipCost || '',
    itemCost: this.props.itemCost || '',
  };

  handleSoldPriceChange = (evt) => {
    this.setState({ soldPrice: parseFloat(evt.target.value) });
  };

  handleShipChargeChange = (evt) => {
    this.setState({ shipCharge: parseFloat(evt.target.value) });
  };

  handleShipCostChange = (evt) => {
    this.setState({ shipCost: parseFloat(evt.target.value) });
  };

  handleItemCostChange = (evt) => {
    this.setState({ itemCost: parseFloat(evt.target.value) });
  };

  handleSubmit = () => {
    this.props.onFormSubmit({
      soldPrice: this.state.soldPrice,
      shipCharge: this.state.shipCharge,
      shipCost: this.state.shipCost,
      itemCost: this.state.itemCost,
    });
  };

  render() {
    return (
      <div>
        <div>
          <label>Sold Price: </label>
          <input
            type='text'
            value={this.state.soldPrice}
            onChange={this.handleSoldPriceChange}
          />
        </div>
        <div>
          <label>Shipping Charge: </label>
          <input
            type='text'
            value={this.state.shipCharge}
            onChange={this.handleShipChargeChange}
          />
        </div>
        <div>
          <label>Shipping Cost: </label>
          <input
            type='text'
            value={this.state.shipCost}
            onChange={this.handleShipCostChange}
          />
        </div>
        <div>
          <label>Item Original Cost: </label>
          <input
            type='text'
            value={this.state.itemCost}
            onChange={this.handleItemCostChange}
          />
        </div>

        <button
          onClick={this.handleSubmit}
        >
          Calculate
        </button>
      </div>
    );
  }
}

export default CalculatorForm;
