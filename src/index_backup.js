import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RatesSideMenu from './RatesSideMenu';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RatesSideMenu />, document.getElementById('root'));
registerServiceWorker();
