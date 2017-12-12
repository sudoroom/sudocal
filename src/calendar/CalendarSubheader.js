import React, { Component } from 'react';
import '../styles.css';

class CalendarSubheader extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentTime: this.props.currentTime
		}
	}

	render() {
		return (
			<div className="calendar-subheader">
				<span className="current-time">{ this.props.currentTime }</span>
			</div>
		)
	}

}

export default CalendarSubheader;
