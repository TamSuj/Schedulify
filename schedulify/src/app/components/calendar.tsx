import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

export default function Calendar() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full">
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          googleCalendarPlugin,
        ]}
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
        titleFormat={{ year: "numeric", month: "long" }}
        buttonText={{
          today: "Today",
          month: "Month",
          week: "Week",
          day: "Day",
        }}
        buttonClassNames="bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 active:bg-gray-200 rounded-md px-2 py-1"
        headerToolbarClassNames="mb-4"
        viewClassNames="rounded-lg"
        events={[
          {
            // this object will be "parsed" into an Event Object
            title: "Lock-In Time", // a property!
            start: "2024-08-22T09:00", // a property!
            end: "2024-08-22T18:00", // a property!
            allDay: false,
          },
        ]}
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
