import React from 'react';
import CalculatorField from './CalculatorField';

class CalculatorForm extends React.Component {
  state = {
    fields: {
      soldPrice: this.props.soldPrice || '',
      shipCharge: this.props.shipCharge || '',
      shipCost: this.props.shipCost || '',
      itemCost: this.props.itemCost || '',
    },
    fieldErrors: {}
  };

  onFormSubmit = (e) => {
    const inputs = this.state.fields;
    e.preventDefault();

    if (this.validate()) return;

    this.props.onFormSubmit({
      soldPrice: parseFloat(inputs.soldPrice),
      shipCharge: parseFloat(inputs.shipCharge),
      shipCost: parseFloat(inputs.shipCost),
      itemCost: parseFloat(inputs.itemCost),
    });
  };

  onInputChange = ({ name, value, error }) => {
    const fields = this.state.fields;
    const fieldErrors = this.state.fieldErrors;

    fields[name] = value;
    fieldErrors[name] = error;

    this.setState({
      fields: fields,
      fieldErrors: fieldErrors
    });
  };

  validate = () => {
    const inputs = this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errorMessages = Object.keys(fieldErrors).filter( (key) => fieldErrors[key]);

    if (!inputs.soldPrice) return true;
    if (!inputs.shipCharge) return true;
    if (!inputs.shipCost) return true;
    if (!inputs.itemCost) return true;
    if (errorMessages.length) return true;

    return false;
  };


  render() {
    return(
      <div className='ui form'>
        <form onSubmit={this.onFormSubmit}>
          <b>Sold Price</b>
          <CalculatorField
            placeholder='$'
            name='soldPrice'
            value={this.state.fields.soldPrice}
            onChange={this.onInputChange}
            validate={(value) => ( value ? false : 'Sold Price Required')}
          />

          <b>Shipping Charge</b>
          <CalculatorField
            placeholder='$'
            name='shipCharge'
            value={this.state.fields.shipCharge}
            onChange={this.onInputChange}
            validate={(value) => ( value ? false : 'Shipping Charge Required')}
          />

          <b>Shipping Cost</b>
          <CalculatorField
            placeholder='$'
            name='shipCost'
            value={this.state.fields.shipCost}
            onChange={this.onInputChange}
            validate={(value) => ( value ? false : 'Shipping Cost Required')}
          />

          <b>Item Original Cost</b>
          <CalculatorField
            placeholder='$'
            name='itemCost'
            value={this.state.fields.itemCost}
            onChange={this.onInputChange}
            validate={(value) => ( value ? false : 'Item Cost Required')}
          />

          <button
            className='ui blue submit button'
            disabled={this.validate()}
          >
            Calculate
          </button>
        </form>
      </div>
    );
  }
};

export default CalculatorForm;
