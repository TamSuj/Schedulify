"use client";
import Calendar from "@/app/calendar";
import Modal from "./modal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-black">
      <div className="add-task-and-calendar flex flex-row w-full">
        <div className="add-task flex-grow h-full w-1/4">
          <Modal></Modal>
        </div>

        <div className="calendar flex-grow w-3/4 h-full">
          <Calendar></Calendar>
        </div>
      </div>

    </main>
  );
}
