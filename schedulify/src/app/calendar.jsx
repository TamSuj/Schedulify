"use client";
import { useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import googleCalendarPlugin from '@fullcalendar/google-calendar';

export default function Calendar() {
    const [events, setEvents] = useState([
        {
          title: "Lock-In Time",
          start: "2024-08-17T09:00",
          end: "2024-08-17T18:00",
          allDay: false,
        },
    ]);

    // const handleAddEvent = () => {
    //     const dateStr = prompt("Enter a date in YYYY-MM-DD format");
    //     const startTime = prompt(
    //         "Enter a start time in HH:mm format (e.g., 09:00)"
    //     );
    //     const endTime = prompt("Enter an end time in HH:mm format (optional)", "");

    //     if (dateStr && startTime) {
    //         const startDate = new Date(`${dateStr}T${startTime}:00`);
    //         let endDate = null;

    //         if (endTime) {
    //         endDate = new Date(`${dateStr}T${endTime}:00`);
    //         }

    //         if (
    //         !isNaN(startDate.valueOf()) &&
    //         (!endTime || !isNaN(endDate?.valueOf()))
    //         ) {
    //         const newEvent = {
    //             title: "Newly added event",
    //             start: startDate,
    //             end: endDate || null, // Null if no end time
    //             allDay: false, // Specifically set to false
    //         };

    //         setEvents((prevEvents) => [...prevEvents, newEvent]);
    //         alert("Event added! Now, update your database...");
    //         } else {
    //         alert("Invalid date or time.");
    //         }
    //     } else {
    //         alert("Date and start time are required.");
    //     }
    // };

    return (
        <div className="bg-white flex rounded-lg shadow-lg p-6 h-screen justify-center items-center">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, googleCalendarPlugin]}
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "resourceTimelineWeek,dayGridMonth,timeGridWeek",
                }}
                nowIndicator={true}
                editable={true}
                droppable={true}
                selectable={true}
                selectMirror={true}
                initialView="dayGridMonth"
                height="auto"
                contentHeight="auto"
                eventClassNames="text-white bg-gray-900 rounded-md px-2 py-1"
                dayCellClassNames="bg-white border-gray-200"
                dayHeaderClassNames="text-gray-900 font-semibold"
                todayClassNames="bg-gray-50"
                titleFormat={{ year: 'numeric', month: 'long' }}
                buttonText={{
                    today: 'Today',
                    month: 'Month',
                    week: 'Week',
                    day: 'Day',
                }}
                buttonClassNames="bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 active:bg-gray-200 rounded-md px-2 py-1"
                headerToolbarClassNames="mb-4"
                viewClassNames="rounded-lg"
                googleCalendarApiKey='AIzaSyBOaBpjRnkfateuafPtD3_IE_-YZMfMdiE'
                eventSources={[
                    {
                        googleCalendarId: '9a090e5f7478a662ee8cbd7d9ea4b2053bdf77caf3999e338304962175e63b7a@group.calendar.google.com',
                        className: 'gcal-event',
                    }
                ]}
                eventTimeFormat={{
                    hour: 'numeric',
                    minute: '2-digit',
                    meridiem: 'short',
                    omitZeroMinute: false
                }}
                
            />
        </div>
    );
}
