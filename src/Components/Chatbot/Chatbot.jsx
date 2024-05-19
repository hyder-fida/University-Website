// src/Chatbot.js
import React, { useState } from 'react';
import './chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  // Predefined responses
  const responses = {
    "hello": "Hi there! How can I help you today?",
    "how are you": "I'm a bot, but I'm doing great! How about you?",
    "bye": "Goodbye! Have a great day!",
  };

  const sendMessage = () => {
    const userMessage = userInput.trim().toLowerCase();
    if (userMessage) {
      const botResponse = responses[userMessage] || "Sorry, I didn't understand that.";
      setMessages([...messages, { sender: 'user', text: userInput }, { sender: 'bot', text: botResponse }]);
      setUserInput('');
    }
  };

  return (
    <div>
      <h1>Chatbot</h1>
      <div id="chatbox">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender}>{msg.text}</p>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type your message here"
        onKeyPress={(e) => { if (e.key === 'Enter') sendMessage(); }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;
