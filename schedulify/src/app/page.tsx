"use client";
import Header from "./header";
import Calendar from "@/app/calendar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-black">
      <Header />
      <Calendar />
    </main>
  );
}
