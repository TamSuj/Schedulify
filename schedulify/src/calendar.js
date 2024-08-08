"use client"

import React, { Component } from 'react';
import CalendarDays from "./calendar-day.js";
import "./calendar.css";

export default class Calendar extends Component {
  constructor() {
    super();

    this.weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];

    this.state = {
      currentDay: new Date()
    }

    this.changeCurrentDay = (day) => {
        this.setState({ currentDay: new Date(day.year, day.month, day.number) });
    }
    
  }
  
  render() {
    return (
      <div className='calendar flex flex-col w-11/12 h-4/5'>
        <div className='calendar-header'>
            <h2>{this.months[this.state.currentDay.getMonth()]} {this.state.currentDay.getFullYear()}</h2>
        </div>

        <div className='calendar-body'>
            <div className='table-header'>
                {this.weekdays.map((weekdays) => {
                    return <div className='weekday'><p>{weekdays}</p></div>
                })}
            </div>

            <div className='table'>
                <CalendarDays day={this.state.currentDay} changeCurrentDay={this.changeCurrentDay}></CalendarDays>
            </div>
        </div>
      </div>
    )
  }
}