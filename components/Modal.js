import React, {useState} from "react";

const Modal = (props) => {
    const [hidden, setHidden] = useState("");
  return (
      <div className={`${hidden} fixed m-auto z-20 bg-white rounded-lg shadow-sm p-6 w-2/6 h-fit inset-x-0 inset-y-0`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Create Task</h3>
          <button className="btn btn-gray-400 rounded-full p-2" onClick={() => setHidden('hidden')}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xs font-bold mb-2"
            htmlFor="taskName"
          >
            Task Name
          </label>
          <input
            className="shadow appearance-none border text-xs rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="input-1"
            placeholder="Type Your Task"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xs font-bold mb-2"
            htmlFor="taskProgress"
          >
            Progress
          </label>
          <input
            className="max-w-[160px] text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="input-2"
            placeholder="70%"
            type="text"
          />
        </div>
        <div className="flex justify-between float-right">
          <button className="border-2 border-gray-200 rounded-xl px-4 py-2 mr-4 text-sm font-medium" onClick={() => setHidden('hidden')}>
            Cancel
          </button>
          <button className="border-2 bg-teal-600 text-white rounded-xl px-4 py-2 mr-4 text-sm font-medium">
            Save Task
          </button>
        </div>
      </div>
  );
};

export default Modal;
