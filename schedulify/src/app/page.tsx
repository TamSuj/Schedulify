// src/app/page.tsx

import Header from "./header";
import Features from "./features";
import Footer from "./footer";
import Workflow from "./workflow";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black dark:bg-black dark:text-white">
      <Header />
      <section className="w-full max-w-4xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-2">
          <Features />
          <Workflow />
        </div>
      </section>
      <Footer />
    </main>
  );
}
