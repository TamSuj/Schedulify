export default function Workflow() {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Workflow</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>Add task on Calendar cell</li>
        <li>AI breaks down the task (optional)</li>
        <li>Edit/update schedule (drag & drop)</li>
        <li>Connect to Google Calendar</li>
      </ol>
    </div>
  );
}
