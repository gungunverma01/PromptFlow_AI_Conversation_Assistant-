# 🚀 PromptFlow

> A modern AI-powered conversation assistant built with **React**, **Tailwind CSS**, and the **Google Gemini API**.

PromptFlow provides a clean, responsive, and intuitive chat experience where users can ask questions, receive AI-generated responses, and view their conversation history in a sleek interface inspired by modern AI assistants.

---

## ✨ Features

- 💬 AI-powered conversations using Google Gemini API
- 📜 Persistent chat session during runtime
- 🧠 Chat history sidebar
- ➕ New Chat functionality
- 🎨 Modern UI built with Tailwind CSS
- 📱 Responsive design
- ⌨️ Press Enter to send messages
- 📝 Formatted AI responses (headings, bullet lists, bold text)
- ⚡ Fast and lightweight React application

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend Framework |
| Tailwind CSS | UI Styling |
| Google Gemini API | AI Responses |
| JavaScript (ES6+) | Application Logic |
| Vite | Build Tool |

---

## 📂 Project Structure

```text
PromptFlow/
│
├── public/
│
├── src/
│   ├── component/
│   │   ├── Answer.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── constants.js
│   ├── file.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/promptflow.git
```

### 2. Navigate to the Project

```bash
cd promptflow
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure the Gemini API

Create your API key from **Google AI Studio**.

Update the API URL inside:

```text
src/constants.js
```

Example:

```javascript
export const URL =
"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=YOUR_API_KEY";
```

---

### 5. Run the Project

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

## 🎯 Current Features

- AI Chat Interface
- Sidebar Navigation
- Conversation History
- New Chat
- Formatted Responses
- Responsive Layout

---

## 🔮 Upcoming Features

- 🌙 Dark / Light Theme
- 💾 Save Chats using Local Storage
- 📋 Copy AI Response
- 📄 Export Chat
- 🔍 Search Chat History
- 📱 Improved Mobile UI
- ⏳ Typing Indicator
- 🔊 Text-to-Speech
- 🎤 Voice Input

---


## 💡 Inspiration

PromptFlow is inspired by modern conversational AI interfaces and focuses on delivering a clean, minimal, and user-friendly experience while demonstrating frontend development skills using React.

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature/NewFeature
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to your branch

```bash
git push origin feature/NewFeature
```

5. Open a Pull Request

---


## 👩‍💻 Author

**Gungun Verma**

- GitHub: https://github.com/gungunverma01
- LinkedIn: https://www.linkedin.com/in/gungun-verma-803460308/

---

⭐ If you like this project, consider giving it a star on GitHub!
