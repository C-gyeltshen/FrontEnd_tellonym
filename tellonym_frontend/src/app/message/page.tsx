"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const ws = new WebSocket('ws://localhost:8080'); // Adjust the WebSocket server address as needed

const Chat = () => {
  const [messages, setMessages] = useState<{ sender: string, content: string }[]>([]);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('User');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = { sender: username, content: message.trim() };
      ws.send(JSON.stringify(newMessage));
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage('');
    }
  };

  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
    <main className="flex flex-col items-center justify-between h-full max-w-md w-full p-4 border">
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === username ? 'self-end' : 'self-start'}`}>
            <div className={`p-2 rounded-lg ${msg.sender === username ? 'bg-blue-100 text-right' : 'bg-green-100 text-left'}`}>
              <strong>{msg.sender}: </strong>{msg.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <div className="flex mb-4">
        <Textarea
          className="flex-1 mr-2 p-2 border rounded-lg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <Button variant="outline" className="p-2" onClick={sendMessage}>
          Send
        </Button>
        <Checkbox className="self-center ml-2" onChange={(checked) => setUsername(checked ? 'Anonymous' : 'User')} />
      </div>
    </div>
    </main>
    </div>
  );
};

export default Chat;
