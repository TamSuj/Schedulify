import Header from "./components/header";
import Features from "./components/features";
import Footer from "./components/footer";
import Workflow from "./components/workflow";
import Link from "next/link";
import Calendar from "@/app/components/calendar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-black">
      <Header />
      <section className="flex-grow flex flex-col items-center justify-center px-6 py-12 mx-auto max-w-4xl">
        <div className="grid gap-10 lg:grid-cols-2 w-full">
          <Features />
          <Workflow />
        </div>
        <div className="mt-8">
          <Link href="/InteractionPage">
            <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500">
              Interact with AI Scheduler
            </button>
          </Link>
          <Link href="/AuthPage">
            <button className=" ml-4 px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500">
              LOG IN
            </button>
          </Link>
          <Link href="/HomePage">
            <button className=" ml-4 px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500">
              Go To Calendar
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
