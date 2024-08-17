"use client";

import { useState } from "react";
import NormalCalendar from "./NormalCalendar.jsx"

export default function Modal() {
    const [isCliked, setIsClicked] = useState(false);


    
    return (
        <div className="flex items-center justify-center h-full">
            <NormalCalendar></NormalCalendar>
        </div>
    )
}