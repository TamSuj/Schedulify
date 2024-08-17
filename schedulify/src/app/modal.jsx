"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';  // Import TimePicker component
import 'react-time-picker/dist/TimePicker.css';
import "react-datepicker/dist/react-datepicker.css";
library.add(fas, far, fab);

export default function Modal( {setNewEventToCalendar} ) {
    const [isCliked, setIsClicked] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState('08:00 AM');  // State for start time
    const [endTime, setEndTime] = useState('09:00 AM');  // State for end time
    const [eventTitle, setEventTitle] = useState('New task');
    const [note, setNote] = useState('');
    const [link, setLink] = useState('');
    const [newEvent, setNewEvent] = useState({})

    const handleClicked = () => {
        setIsClicked((prevState) => {
            return !prevState;
        });
    };

    const handleSavePlan = () => {
        const newevent = {
            title: eventTitle,
            date: startDate,
            startTime: startTime,
            endTime: endTime,
            note: note,
            link:  link
        }

        setNewEvent(newevent);
    }

    
    return (
        <div className="flex items-center justify-center h-full">
                    <div className="w-1/3 min-w-96 px-8 py-8 bg-white rounded-xl">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-black mt-3">New Event</h2>
                <button>
                    <i className="fa fa-times text-black text-lg"></i>
                </button>
            </div>
            <div className="mb-4">
                <label className="text-sm font-medium text-gray-600">Title</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 mt-1 text-base text-gray-600 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Event name"
                    onChange={(event) => setEventTitle(event.target.value)}
                />
                <input type="checkbox" id="checkbox" onChange={handleClicked}/>
                <label className="text-sm" htmlFor="checkbox"> {' '} Magical Task Break Down {' '} <FontAwesomeIcon icon="fa-solid fa-wand-magic-sparkles" /></label>
            </div>
            <div className="mb-4 flex justify-between">
                <label className="text-sm font-medium text-gray-600 pt-2">Type</label>
                <div className="flex space-x-2">
                    <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md">Event</button>
                    <button className="px-4 py-2 text-sm text-gray-600 border rounded-md">Meet</button>
                    <button className="px-4 py-2 text-sm text-gray-600 border rounded-md">Tasks</button>
                </div>
            </div>
            <div className="mb-4">
                <label className="text-sm font-medium text-gray-600">Date  </label>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="EEEE, dd MMMM yyyy"
                    className="w-full px-4 py-2 mt-1 text-base border text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholderText="Friday, 28 June 2024"
                />
            </div>
            <div className="mb-4 justify-between">
                <label className="text-sm font-medium text-gray-600 pr-7">Time</label>
                <div className="flex space-x-2">
                    <TimePicker
                        onChange={setStartTime}  // Handle the change event
                        value={startTime}  // Set the value to the state
                        // className="w-1/2 px-4 py-2 mt-1 text-base text-gray-600 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        format="h:mm a"  // 12-hour format with AM/PM
                        disableClock={true}
                    />
                    <span className="text-gray-500 pt-3">→</span>
                    <TimePicker
                        onChange={setEndTime}  // Handle the change event
                        value={endTime}  // Set the value to the state
                        // className="w-1/2 px-4 py-2 mt-1 text-base text-gray-600 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        format="hh:mm a"  // 12-hour format with AM/PM
                        disableClock={true}

                    />
                </div>
            </div>
            <div className="mb-4">
                <label className="text-sm font-medium text-gray-600">Note</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 mt-1 text-base text-gray-600 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add Description"
                    onChange={(event) => setNote(event.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="text-sm font-medium text-gray-600">Link</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 mt-1 text-base text-gray-600 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://meet.google.com/..."
                    onChange={(event) => setLink(event.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="text-sm font-medium text-gray-600">Colors</label>
                <div className="flex space-x-2">
                    <button className="w-8 h-8 bg-blue-500 rounded-full"></button>
                    <button className="w-8 h-8 bg-green-500 rounded-full"></button>
                    <button className="w-8 h-8 bg-pink-400 rounded-full"></button>
                    <button className="w-8 h-8 bg-yellow-400 rounded-full"></button>
                    <button className="w-8 h-8 bg-gray-500 rounded-full"></button>
                </div>
            </div>
            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                    <label htmlFor="switch-toggle"
                        title="Allow a single accordion panel to be expanded at a time"
                        className="switch-container">
                        <div className="switch">
                            <input id="switch-toggle" type="checkbox" role="switch"
                                aria-labelledby="switch-label"/>
                            <span className="slider"></span>
                        </div>
                        <label id="switch-status" className="text-sm font-medium text-gray-600">Set reminder</label>
                    </label>
                </div>
                <div className="flex space-x-2">
                    <button className="px-4 py-2 text-sm text-black bg-gray-200 rounded-md">Cancel</button>
                    <button 
                        className="px-4 py-2 text-sm text-white bg-black rounded-md"
                        onClick={handleSavePlan}
                        >Save</button>
                </div>
            </div>
        </div>
        </div>
    )
}