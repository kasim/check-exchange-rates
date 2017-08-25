import React, { Component } from 'react';
import DatePicker from './DateComponent';
import CurrencyDropDown from './CurrencyComponent';
import moment from 'moment';
import axios from 'axios'
import logo from './logo.png';
import './App.css';

const apiUrl = 'https://exchangeratesapi.herokuapp.com'

const options = [
  'AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTC', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLF', 'CLP', 'CNH', 'CNY', 'COP', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GGP', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'IMP', 'INR', 'IQD', 'IRR', 'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'SSP', 'STD', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VEF', 'VND', 'VUV', 'WST', 'XAF', 'XAG', 'XAU', 'XCD', 'XDR', 'XOF', 'XPD', 'XPF', 'XPT', 'YER', 'ZAR', 'ZMW', 'ZWL'
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
	options : options,
	rateText : '',
	ratesDate : moment().format("YYYY-MM-DD"),
	baseCurrency: 'USD',
	targetCurrency : 'HKD'
    }
    this.onTargetCurrencyChange = this.onTargetCurrencyChange.bind(this)
    this.onBaseCurrencyChange = this.onBaseCurrencyChange.bind(this)
    this.onDateChange = this.onDateChange.bind(this)
  }

  getRates = (date, base, curr) => {
      if(date === moment().format("YYYY-MM-DD")){
	axios.get(`${apiUrl}/api/latest/${curr}/base/${base}`)
	.then( response => { this.setState({rateText: response.data.rates}) } )
	.catch( error => console.log(error) )
      } else {
	axios.get(`${apiUrl}/api/historical/${date}/${curr}/base/${base}`)
	.then( response => { this.setState({rateText: response.data.rates}) } )
	.catch( error => console.log(error) )
      }
  }

  onDateChange(date) {
    this.setState({
	ratesDate : date.format("YYYY-MM-DD")
    })
    this.getRates(date.format("YYYY-MM-DD"), this.state.baseCurrency, this.state.targetCurrency)
  }

  onTargetCurrencyChange(option) {
    this.setState({
	targetCurrency : option.value
    })
    this.getRates(this.state.ratesDate, this.state.baseCurrency, option.value)
  }

  onBaseCurrencyChange(option) {
    this.setState({
	baseCurrency : option.value
    })
    this.getRates(this.state.ratesDate, option.value, this.state.targetCurrency)
  }

  componentDidMount(node) {
    this.getRates(this.state.ratesDate, this.state.baseCurrency, this.state.targetCurrency)
 }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>International Exchange Rates Services</h2>
        </div>
	<div>
	  <div style={{ display: 'flex', margin: '10px', paddingLeft: '10px' }}>
	    Please select the target date, base currency and target currency to show the corresponding exchange rate:
	  </div>
	  <div style={{ display: 'flex', margin: '20px' }}>
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
	<div>
	  <div className="App-output" style={{ display: 'flex', margin: '100px' }}>
	    The exchange rate is : {this.state.rateText}
	  </div>
	</div>
      </div>
    );
  }
}

export default App;
