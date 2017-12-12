import React, { Component } from 'react';
import '../styles.css';

class CalendarHeader extends Component {

	constructor(props) {
		super(props);
		this.state = {
			viewMonth: this.props.viewMonth,
			getPrevMonth: this.props.getPrevMonth,
			getNextMonth: this.props.getNextMonth
		}
	}

	render() {
		return (
			<div className="calendar-header">
				<h1 className="calendar-title">
					<a href="#" className="prev-month-arrow" onClick={ this.props.getPrevMonth }>&lt; Prev</a>
					{ this.props.viewMonth.monthNumberShort }/{ this.props.viewMonth.yearLong }
					<a href="#" className="next-month-arrow" onClick={ this.props.getNextMonth }>Next &gt;</a>
				</h1>
			</div>
		)
	}

}

export default CalendarHeader;
