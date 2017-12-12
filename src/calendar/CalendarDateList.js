import React, { Component } from 'react';
import '../styles.css';

class CalendarDateList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			viewMonth: this.props.viewMonth
		}
	}

	render() {
		let previousMonthDates;
		let dates;
		let nextMonthDates;
		let startingDayNumber;
		let previousMonthArrayLength;
		let calendarDateLength;
		
		startingDayNumber = previousMonthArrayLength = parseInt(this.props.viewMonth.startingDayNumber);
		if(previousMonthArrayLength === 7){ previousMonthArrayLength = 0; }
		if(startingDayNumber === 5 || startingDayNumber === 6){
			calendarDateLength = 42;
		} else {
			calendarDateLength = 35;
		}
		
		previousMonthDates = Array(previousMonthArrayLength).fill(null);
		for(let i = 0; i < previousMonthDates.length; i++){
			previousMonthDates[i] = {
				number: this.props.viewMonth.daysInPrevMonth - i
			};	
		};
		previousMonthDates = previousMonthDates.reverse();
		
		dates = Array(this.props.viewMonth.daysInMonth).fill(null);

		let nextMonthArrayLength = parseInt(calendarDateLength - (previousMonthDates.length + dates.length));
		if(nextMonthArrayLength > 0){
			nextMonthDates = Array(nextMonthArrayLength).fill(null);
		} else {
			nextMonthDates = [];
		}
		
		return (
			<div className="calendar-dates">
				<div className="calendar-weekdays">
					<div className="calendar-weekday">Sunday</div>
					<div className="calendar-weekday">Monday</div>
					<div className="calendar-weekday">Tuesday</div>
					<div className="calendar-weekday">Wednesday</div>
					<div className="calendar-weekday">Thursday</div>
					<div className="calendar-weekday">Friday</div>
					<div className="calendar-weekday">Saturday</div>
				</div>
				{ previousMonthDates.map((date, index) => {
					return <div className="prev calendar-date" key={ `p${this.props.viewMonth.daysInPrevMonth - index}` }>{ date.number }</div>
				})}
				{ dates.map((date, index) => {
					return <div className="calendar-date" key={ index + 1 }>{ index + 1 }</div>
				})}
				{ nextMonthDates.map((date, index) => {
					return <div className="prev calendar-date" key={ `n${index}` }>{ index + 1 }</div>
				})}
			</div>
		)
	}

}

export default CalendarDateList;
