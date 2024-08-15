import "@/styles/modal.css";
export default function Modal() {
    return (
        <div className="flex items-center justify-center z-50 top-0">
            <div className="w-1/3 min-w-96 px-8 py-8 bg-white rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-black mt-3">New Event</h2>
                    <button>
                        <i className="fa fa-times text-black text-lg"></i>
                    </button>
                </div>
                <div className="mb-4">
                    <label className="text-sm font-medium text-gray-600">Title</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 mt-1 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Event name"
                    />
                </div>
                <div className="mb-4 flex justify-between">
                    <label className="text-sm font-medium text-gray-600 pt-2">Type</label>
                    <div className="flex space-x-2">
                        <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md">Event</button>
                        <button className="px-4 py-2 text-sm text-gray-600 border rounded-md">Meet</button>
                        <button className="px-4 py-2 text-sm text-gray-600 border rounded-md">Tasks</button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-sm font-medium text-gray-600">Date</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 mt-1 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Friday, 28 June 2024"
                    />
                </div>
                <div className="mb-4 justify-between">
                    <label className="text-sm font-medium text-gray-600 pr-7">Time</label>
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            className="w-1/2 px-4 py-2 mt-1 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="8:00 AM"
                        />
                        <span className="text-gray-500 pt-3">→</span>
                        <input
                            type="text"
                            className="w-1/2 px-4 py-2 mt-1 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="9:00 AM"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-sm font-medium text-gray-600">Note</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 mt-1 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Add Description"
                    />
                </div>
                <div className="mb-4">
                    <label className="text-sm font-medium text-gray-600">Link</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 mt-1 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="https://meet.google.com/..."
                    />
                </div>
                <div className="mb-4">
                    <label className="text-sm font-medium text-gray-600">Colors</label>
                    <div className="flex space-x-2">
                        <button className="w-8 h-8 bg-blue-500 rounded-full"></button>
                        <button className="w-8 h-8 bg-green-500 rounded-full"></button>
                        <button className="w-8 h-8 bg-pink-400 rounded-full"></button>
                        <button className="w-8 h-8 bg-yellow-400 rounded-full"></button>
                        <button className="w-8 h-8 bg-gray-500 rounded-full"></button>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center">
                        <label htmlFor="switch-toggle"
                               title="Allow a single accordion panel to be expanded at a time"
                               className="switch-container">
                            <div className="switch">
                                <input id="switch-toggle" type="checkbox" role="switch"
                                       aria-labelledby="switch-label"/>
                                <span className="slider"></span>
                            </div>
                            <label id="switch-status" className="text-sm font-medium text-gray-600">Set reminder</label>
                        </label>
                        {/*<input*/}
                        {/*    type="checkbox"*/}
                        {/*    className="w-4 h-4 mr-2 text-blue-500 border-gray-300 rounded focus:ring-blue-500"*/}
                        {/*/>*/}
                    </div>
                    <div className="flex space-x-2">
                        <button className="px-4 py-2 text-sm text-black bg-gray-200 rounded-md">Cancel</button>
                        <button className="px-4 py-2 text-sm text-white bg-black rounded-md">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}