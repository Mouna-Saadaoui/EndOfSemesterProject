import React, { useState, useEffect } from 'react';
import './BoardOfNotes.css';

const Board = () => { 
  console.log('Board component rendering...');

  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = localStorage.getItem('messages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  const sendButton = () => {
    if (inputValue.trim() !== '') {
      const newMessages = [...messages, inputValue];
      setMessages(newMessages);
      setInputValue('');
      localStorage.setItem('messages', JSON.stringify(newMessages));
    }
  };

  return (
    <div>
      <InputField
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={sendButton}>Send</button>
      <MessageContainer messages={messages} />
    </div>
  );
};

const InputField = ({ value, onChange }) => {
  return (
    <div>
      <input
        className="inputMsg"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Leave a supportive message for the artist"
      />
    </div>
  );
};

const MessageContainer = ({ messages }) => {
  return (
    <ul>
      {messages.map((message, index) => (
        <li className="notes" key={index}>
          {message}
        </li>
      ))}
    </ul>
  );
};

export default Board;





