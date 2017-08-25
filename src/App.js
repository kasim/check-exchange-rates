import React, { Component } from 'react';
import DatePicker from './DateComponent';
import CurrencyDropDown from './CurrencyComponent';
import moment from 'moment';
import axios from 'axios'
import logo from './logo.png';
import './App.css';

const options = [
  'USD', 'JPY', 'GBP', 'HKD'
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
	options : options,
	ratesDate : moment().format("YYYY-MM-DD"),
	baseCurrency: 'USD',
	targetCurrency : 'HKD'
    }
    this.onTargetCurrencyChange = this.onTargetCurrencyChange.bind(this)
    this.onBaseCurrencyChange = this.onBaseCurrencyChange.bind(this)
    this.onDateChange = this.onDateChange.bind(this)
  }

  onDateChange(date) {
    console.log('date changed ', date.format("YYYY-MM-DD"))
    this.setState({
	ratesDate : date.format("YYYY-MM-DD")
    })
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then( response => console.log(response) )
    .catch( error => console.log(error) )
  }

  onTargetCurrencyChange(option) {
    console.log('target selected ', option.value)
    this.setState({
	targetCurrency : option
    })
  }

  onBaseCurrencyChange(option) {
    console.log('base selected ', option.value)
    this.setState({
	baseCurrency : option
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>International Exchange Rates Services</h2>
        </div>
	<div>
	  <div style={{ display: 'flex', margin: '100px' }}>
		<div style={{ height: '34px' }}>
		Date :
		</div>
		<div>
		    <DatePicker onChange={this.onDateChange}/>
		</div>
		<div/>
		<div style={{ 'paddingLeft': '10px' }}>
		    Base Currency :
		</div>
		<div style={{ width: '169px' }}>
		    <CurrencyDropDown
			option={this.state.baseCurrency}
			options={this.state.options}
			onChange={this.onBaseCurrencyChange}
		    />
		</div>
		<div style={{ 'paddingLeft': '10px' }}>
		    Target Currency :
		</div>
		<div style={{ width: '169px' }}>
		    <CurrencyDropDown
			option={this.state.targetCurrency} 
			options={this.state.options}
			onChange={this.onTargetCurrencyChange}
		    />
		</div>
	    </div>
	</div>
      </div>
    );
  }
}

export default App;
