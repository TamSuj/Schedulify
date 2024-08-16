import { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

export default function Calendar() {
  const [events, setEvents] = useState([
    {
      title: "Lock-In Time",
      start: "2024-08-17T09:00",
      end: "2024-08-17T18:00",
      allDay: false,
    },
  ]);
  const calendarRef = useRef(null);

  const handleAddEvent = () => {
    const dateStr = prompt("Enter a date in YYYY-MM-DD format");
    const startTime = prompt(
      "Enter a start time in HH:mm format (e.g., 09:00)"
    );
    const endTime = prompt("Enter an end time in HH:mm format (optional)", "");

    if (dateStr && startTime) {
      const startDate = new Date(`${dateStr}T${startTime}:00`);
      let endDate = null;

      if (endTime) {
        endDate = new Date(`${dateStr}T${endTime}:00`);
      }

      if (
        !isNaN(startDate.valueOf()) &&
        (!endTime || !isNaN(endDate?.valueOf()))
      ) {
        const newEvent = {
          title: "Newly added event",
          start: startDate,
          end: endDate || null, // Null if no end time
          allDay: false, // Specifically set to false
        };

        setEvents((prevEvents) => [...prevEvents, newEvent]);
        alert("Event added! Now, update your database...");
      } else {
        alert("Invalid date or time.");
      }
    } else {
      alert("Date and start time are required.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full">
      <button
        className="bg-gray-900 text-white rounded-md px-4 py-2 mb-4"
        onClick={handleAddEvent}
      >
        Add Event
      </button>
      <FullCalendar
        ref={calendarRef}
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          googleCalendarPlugin,
        ]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek",
        }}
        nowIndicator={true}
        editable={true}
        droppable={true}
        selectable={true}
        selectMirror={true}
        initialView="dayGridMonth"
        height="auto"
        contentHeight="auto"
        events={events}
        eventTimeFormat={{
          hour: "numeric",
          minute: "2-digit",
          meridiem: "short",
          omitZeroMinute: false,
        }}
      />
    </div>
  );
}
