import { useState } from 'react'


import './App.css'
import { URL } from './constants'
import Answer from './component/answer';



function App() {
   const [question , setQuestion] = useState('');
   const [history, setHistory] = useState([]);

   const payload = {
   "contents": [{
    "parts": [{"text": question}]
   }]
   }

   const askQuestion = async () => {

  if (!question.trim()) return;

  const currentQuestion = question;

  const payload = {
    contents: [
      {
        parts: [{ text: currentQuestion }]
      }
    ]
  };

  let response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(payload)
  });

  response = await response.json();

  const answer = response.candidates[0].content.parts[0].text;

  setHistory(prev => [
    ...prev,
    {
      question: currentQuestion,
      answer: answer
    }
  ]);

  setQuestion("");
};

  return (
    <div className='grid grid-cols-5 h-screen text-left'>
      <div className='col-span-1 bg-zinc-800'>

      </div>
      <div className='col-span-4 p-10' >
        <div className="container h-110 overflow-y-auto overflow-x-hidden scrollbar-hide">
          <div className='text-zinc-300'>
          

          <div className="space-y-8">
  {history.map((chat, index) => (
    <div key={index}>

      <div className="flex justify-end mb-4">
  <div className="bg-blue-600 px-4 py-2 rounded-2xl max-w-xl text-white">
    {chat.question}
  </div>
</div>

<div className="flex justify-start mb-6">
  <div className="bg-zinc-800 px-4 py-2 rounded-2xl max-w-xl">
    <Answer ans={chat.answer} />
  </div>
</div>

    </div>
  ))}
</div>


         </div>
        </div>
        <div className='bg-zinc-800 w-1/2 p-1 pr-5 text-white m-auto rounded-4xl 
        border
        border-zinc-700 flex h-16'>
          <input type='text' value={question} onChange={(event)=> setQuestion(event.target.value)} className='w-full h-full p-3 outline-none' placeholder='ask me anything' />
          <button onClick={askQuestion} >Ask</button>
        </div>
      </div>
    </div>
  )
}

export default App
