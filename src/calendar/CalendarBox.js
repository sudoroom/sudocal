import React, { Component } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarSubheader from './CalendarSubheader';
import CalendarDateList from './CalendarDateList';
import '../styles.css';
import moment from 'moment';

class CalendarBox extends Component {

	constructor(props) {
		super(props);
		this.state = {
			calendarTitle: getCalendarTitle(),
			currentTime: "",
			viewMonth: getCurrentMonth()
		}
		this.loadCurrentTime = this.loadCurrentTime.bind(this);
		this.getPrevMonth = this.getPrevMonth.bind(this);
		this.getNextMonth = this.getNextMonth.bind(this);
	}

	getPrevMonth() {
		this.setState({ viewMonth: getPrevMonth(this.state.viewMonth) });
	}

	getNextMonth() {
		this.setState({ viewMonth: getNextMonth(this.state.viewMonth) });
	}

	loadCurrentTime() {
		let now = new moment();
		let currentTime = now.format('hh:mm:ssa');
		this.setState({ currentTime: currentTime });
	}

	componentDidMount() {
		this.loadCurrentTime();
		setInterval(this.loadCurrentTime, 1000);
	}

	render() {
		return (
			<div className="calendar-box">
				<CalendarHeader 
					viewMonth={this.state.viewMonth}
					getPrevMonth={this.getPrevMonth} 
					getNextMonth={this.getNextMonth}
				/>
				<CalendarSubheader 
					currentTime={this.state.currentTime}
				/>
				<CalendarDateList 
					viewMonth={this.state.viewMonth}
				/>
			</div>
		)
	}

}

export default CalendarBox;

function getCalendarTitle() {
	let now = new moment();
	let currentMonth = now.format('MM');
	let currentYear = now.format('YY');
	return `${currentMonth}/${currentYear}`;
}

function getCurrentMonth() {
	let now = new moment();
	let monthNumberShort = now.format('M');
	let monthNumberLong = now.format('MM');
	let monthStringShort = now.format('MMM');
	let monthStringLong = now.format('MMMM');
	let yearLong = now.format('YYYY');
	let yearShort = now.format('YY');
	let daysInMonth = moment(`${yearLong}-${monthNumberLong}`, "YYYY-MM").daysInMonth();
	let daysInPrevMonth = moment(`${yearLong}-${monthNumberLong}`, "YYYY-MM").subtract(1, 'months').daysInMonth();
	let startingDayNumber = moment(`${yearLong}-${monthNumberLong}`, "YYYY-MM").format('E');
	let month = {
		yearLong: yearLong,
		yearShort: yearShort,
		monthNumberShort: monthNumberShort,
		monthNumberLong: monthNumberLong,
		monthStringShort: monthStringShort,
		monthStringLong: monthStringLong,
		daysInMonth: daysInMonth,
		daysInPrevMonth: daysInPrevMonth,
		startingDayNumber: startingDayNumber
	};
	return month;
}

function getPrevMonth(currentMonth) {
	let now = moment(`${currentMonth.yearLong}-${currentMonth.monthNumberLong}`, "YYYY-MM").subtract(1, 'months');
	let monthNumberShort = now.format('M');
	let monthNumberLong = now.format('MM');
	let monthStringShort = now.format('MMM');
	let monthStringLong = now.format('MMMM');
	let yearLong = now.format('YYYY');
	let yearShort = now.format('YY');
	let daysInMonth = moment(`${yearLong}-${monthNumberLong}`, "YYYY-MM").daysInMonth();
	let daysInPrevMonth = moment(`${yearLong}-${monthNumberLong}`, "YYYY-MM").subtract(1, 'months').daysInMonth();
	let startingDayNumber = moment(`${yearLong}-${monthNumberLong}`, "YYYY-MM").format('E');
	let month = {
		yearLong: yearLong,
		yearShort: yearShort,
		monthNumberShort: monthNumberShort,
		monthNumberLong: monthNumberLong,
		monthStringShort: monthStringShort,
		monthStringLong: monthStringLong,
		daysInMonth: daysInMonth,
		daysInPrevMonth: daysInPrevMonth,
		startingDayNumber: startingDayNumber
	};
	return month;	
}

function getNextMonth(currentMonth) {
	let now = moment(`${currentMonth.yearLong}-${currentMonth.monthNumberLong}`, "YYYY-MM").add(1, 'months');
	let monthNumberShort = now.format('M');
	let monthNumberLong = now.format('MM');
	let monthStringShort = now.format('MMM');
	let monthStringLong = now.format('MMMM');
	let yearLong = now.format('YYYY');
	let yearShort = now.format('YY');
	let daysInMonth = moment(`${yearLong}-${monthNumberLong}`, "YYYY-MM").daysInMonth();
	let daysInPrevMonth = moment(`${yearLong}-${monthNumberLong}`, "YYYY-MM").subtract(1, 'months').daysInMonth();
	let startingDayNumber = moment(`${yearLong}-${monthNumberLong}`, "YYYY-MM").format('E');
	let month = {
		yearLong: yearLong,
		yearShort: yearShort,
		monthNumberShort: monthNumberShort,
		monthNumberLong: monthNumberLong,
		monthStringShort: monthStringShort,
		monthStringLong: monthStringLong,
		daysInMonth: daysInMonth,
		daysInPrevMonth: daysInPrevMonth,
		startingDayNumber: startingDayNumber
	};
	return month;	
}