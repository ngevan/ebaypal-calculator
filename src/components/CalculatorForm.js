import React from 'react';

class CalculatorForm extends React.Component {
  state = {
    soldPrice: this.props.soldPrice || '',
    shipCharge: this.props.shipCharge || '',
    shipCost: this.props.shipCost || '',
    itemCost: this.props.itemCost || '',
  };

  handleSoldPriceChange = (evt) => {
    this.setState({ soldPrice: evt.target.value });
  };

  handleShipChargeChange = (evt) => {
    this.setState({ shipCharge: evt.target.value });
  };

  handleShipCostChange = (evt) => {
    this.setState({ shipCost: evt.target.value });
  };

  handleItemCostChange = (evt) => {
    this.setState({ itemCost: evt.target.value });
  };

  handleSubmit = () => {
    this.props.onFormSubmit({
      soldPrice: parseFloat(this.state.soldPrice),
      shipCharge: parseFloat(this.state.shipCharge),
      shipCost: parseFloat(this.state.shipCost),
      itemCost: parseFloat(this.state.itemCost),
    });
  };

  render() {
    return (
      <div className='ui form'>
        <div className='field'>
          <label>Sold Price:</label>
          <input
            type='text'
            value={this.state.soldPrice}
            onChange={this.handleSoldPriceChange}
            placeholder='$'
          />
        </div>
        <div className='field'>
          <label>Shipping Charge:</label>
          <input
            type='text'
            value={this.state.shipCharge}
            onChange={this.handleShipChargeChange}
            placeholder='$'
          />
        </div>
        <div className='field'>
          <label>Shipping Cost:</label>
          <input
            type='text'
            value={this.state.shipCost}
            onChange={this.handleShipCostChange}
            placeholder='$'
          />
        </div>
        <div className='field'>
          <label>Item Original Cost:</label>
          <input
            type='text'
            value={this.state.itemCost}
            onChange={this.handleItemCostChange}
            placeholder='$'
          />
        </div>

        <button
          className='ui blue submit button'
          onClick={this.handleSubmit}
        >
          Calculate
        </button>
      </div>
    );
  }
}

export default CalculatorForm;
