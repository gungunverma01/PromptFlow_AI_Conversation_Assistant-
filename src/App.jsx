import { useState } from "react";
import "./App.css";
import { URL } from "./constants";
import Answer from "./component/Answer";
import Sidebar from "./component/Sidebar";

function App() {
  const [question, setQuestion] = useState("");
  const [history, setHistory] = useState([]);

  const askQuestion = async () => {
    if (!question.trim()) return;

    const currentQuestion = question;

    const payload = {
      contents: [
        {
          parts: [{ text: currentQuestion }],
        },
      ],
    };

    try {
      let response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      response = await response.json();

      const answer = response.candidates[0].content.parts[0].text;

      setHistory((prev) => [
        ...prev,
        {
          question: currentQuestion,
          answer,
        },
      ]);

      setQuestion("");
    } catch (err) {
      console.log(err);
    }
  };

  const newChat = () => {
    setHistory([]);
    setQuestion("");
  };

  return (
    <div className="grid grid-cols-5 h-screen bg-zinc-900">

      {/* Sidebar */}
      <Sidebar history={history} newChat={newChat} />

      {/* Chat Area */}
      <div className="col-span-4 flex flex-col">

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-8">

          {history.length === 0 && (
            <div className="text-center mt-32">
              <h1 className="text-5xl font-bold text-white">
                PromptFlow
              </h1>

              <p className="text-zinc-400 mt-4">
                Ask me anything...
              </p>
            </div>
          )}

          {history.map((chat, index) => (
            <div key={index} className="mb-8">

              {/* User */}

              <div className="flex justify-end mb-4">
                <div className="bg-blue-600 text-white px-5 py-3 rounded-3xl max-w-xl">
                  {chat.question}
                </div>
              </div>

              {/* AI */}

              <div className="flex justify-start">
                <div className="bg-zinc-800 rounded-2xl p-5 max-w-3xl">
                  <Answer ans={chat.answer} />
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* Input */}

        <div className="p-6">

          <div className="bg-zinc-800 border border-zinc-700 rounded-full flex h-16 w-2/3 mx-auto">

            <input
              className="flex-1 bg-transparent text-white outline-none px-6"
              placeholder="Ask me anything..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  askQuestion();
                }
              }}
            />

            <button
              onClick={askQuestion}
              className="px-8 text-white hover:text-cyan-400"
            >
              Ask
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;