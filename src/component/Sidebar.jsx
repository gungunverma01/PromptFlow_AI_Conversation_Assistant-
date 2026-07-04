const Sidebar = ({ history, newChat }) => {
  return (
    <div className="col-span-1 bg-zinc-900 border-r border-zinc-700 flex flex-col">

      {/* Logo */}

      <div className="p-6 border-b border-zinc-700">

        <h1 className="text-3xl font-bold text-white">
          PromptFlow
        </h1>

        <p className="text-zinc-400 text-sm mt-2">
          AI Conversation Assistant
        </p>

      </div>

      {/* Button */}

      <div className="p-4">

        <button
          onClick={newChat}
          className="w-full bg-zinc-800 hover:bg-zinc-700 rounded-lg p-3 text-white"
        >
          + New Chat
        </button>

      </div>

      {/* History */}

      <div className="flex-1 overflow-y-auto">

        <h2 className="text-zinc-400 px-4 mb-3">
          Chat History
        </h2>

        {history.map((chat, index) => (

          <div
            key={index}
            className="mx-3 mb-2 p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 cursor-pointer"
          >
            <p className="text-white truncate text-sm">
              {chat.question}
            </p>
          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="border-t border-zinc-700 p-5">

        <button className="text-white">
          🌙 Dark Mode
        </button>

      </div>

    </div>
  );
};

export default Sidebar;