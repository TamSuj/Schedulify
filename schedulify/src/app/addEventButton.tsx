"use client";
import {useState} from "react";
import Modal from "./modal";

export default function AddEventButton() {
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(!showModal);
    }

    return(
        <div>
            <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={handleClick}>
                Add Event
            </button>
            {showModal && <Modal/>}
        </div>
    )


}