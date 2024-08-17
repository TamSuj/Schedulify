
import Calendar from "@/app/calendar";
import Modal from "../src/app/modal";
import {getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { init } from "next/dist/compiled/webpack/webpack";
import { useEffect } from "react";
import {useRouter} from "next/router";
import useFireBaseAuth from "../firebase/useAuth";
export default function HomePage() {
    const {user} = useFireBaseAuth();
    return (
<main>
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
