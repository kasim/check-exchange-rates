import React from 'react';
import Dropdown from 'react-dropdown'
import './CurrencyComponent.css'

class CurrencyComponent extends React.Component {
  propTypes: {
    option: React.PropTypes.String,
    options: React.PropTypes.array,
    onChange: React.PropTypes.func
  }
  constructor(props) {
    super(props);
    this.state = {
	selectedOption: this.props.option
    }
    this.onSelect = this.onSelect.bind(this)
  }
  onSelect(option) {
    this.props.onChange(option)
    this.setState({selectedOption: option})
  }
  render() {
    return <Dropdown options={this.props.options} onChange={this.onSelect} value={this.state.selectedOption} />;
  }
}

export default CurrencyComponent
