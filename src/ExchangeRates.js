import React from 'react';
import DatePicker from './DateComponent';
import CurrencyDropDown from './CurrencyComponent';

const getCurrencyStatus = () =>
    CurrencyDropDown.state;

const Main = () =>
    <div style={{ display: 'flex', margin: '100px' }}>
	<div style={{ height: '34px' }}>
	    Date :
	</div>
	<div>
	    <DatePicker />
	</div>
	<div/>
	<div style={{ 'padding-left': '10px' }}>
	    Currency :
	</div>
	<div style={{ width: '169px' }}>
	    <CurrencyDropDown />
	</div>
    </div>;

export default Main;
