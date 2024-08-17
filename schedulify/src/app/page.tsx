
import WelcomePage from "./loginPage";
import initMyFirebase from "../../firebase/firebaseInit";

export default function Home() {
initMyFirebase();
  return (
    <main className="flex min-h-screen flex-col bg-white text-black">
     <WelcomePage></WelcomePage>
    </main>
  );
}
