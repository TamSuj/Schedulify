export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black dark:bg-black dark:text-white">
        <header className="w-full max-w-4xl mx-auto text-center py-10">
          <h1 className="text-4xl font-bold">Schedulify</h1>
          <p className="mt-4 text-xl">Your AI-Powered Task Scheduler</p>
        </header>

        <section className="w-full max-w-4xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Sync with Google Calendar</li>
                <li>AI-Powered Task Breakdown</li>
                <li>Add Events to Calendar</li>
                <li>Add To-Do Tasks</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Workflow</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Add task on Calendar cell</li>
                <li>AI breaks down the task (optional)</li>
                <li>Edit/update schedule (drag & drop)</li>
                <li>Connect to Google Calendar</li>
              </ol>
            </div>
          </div>
        </section>

        <footer className="w-full max-w-4xl mx-auto text-center py-10">
          <a
              className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              href="https://github.com/TamSuj/Schedulify"
              target="_blank"
              rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </footer>
      </main>
  );
}
