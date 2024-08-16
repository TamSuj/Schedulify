"use client";
import Header from "./header";
import Calendar from "@/app/calendar";
import Features from "./features";
import Footer from "./footer";
import Workflow from "./workflow";
import Link from "next/link";
import AddEventButton from "@/app/addEventButton";
import Modal from "@/app/modal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-black">
      <Header />
      <Calendar />
    </main>
  );
}
