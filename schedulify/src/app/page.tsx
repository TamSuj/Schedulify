import Calendar from "@/app/calendar.jsx";
import Modal from "./modal.jsx";  

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-black h-screen">
      <div className="flex flex-row w-full h-full">
        <div className="w-1/4 h-full">
          <Modal></Modal>
        </div>
        
        <div className="w-3/4 h-full">
          <Calendar></Calendar>
        </div>
      </div>

    </main>
  );
}
