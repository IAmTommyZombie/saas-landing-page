import { useState } from "react";

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white shadow-xl rounded-lg w-80 p-4 mb-3 border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-gray-700">Support</h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm text-gray-500"
            >
              ✕
            </button>
          </div>
          <div className="text-sm text-gray-600 mb-4">
            👋 Hi there! How can we help?
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        {isOpen ? "Close" : "Chat"}
      </button>
    </div>
  );
}

export default ChatWidget;
