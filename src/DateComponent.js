import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class DateComponent extends React.Component {
  propTypes: {
    onChange: React.PropTypes.func
  }
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.props.onChange(date)
    this.setState({
      startDate: date
    });
  }

  render() {
    return <DatePicker
	dateFormat="YYYY/MM/DD"
        selected={this.state.startDate}
        onChange={this.handleChange}
	minDate={moment("2017-01-01")}
	maxDate={moment()}
    />;
  }
}

export default DateComponent
