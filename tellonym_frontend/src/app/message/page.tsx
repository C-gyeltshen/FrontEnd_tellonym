"use client";
import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import Message from "../../reuseable_component/message";
import MessageHeader from '@/reuseable_component/messageHeader';

const HomePage = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim()) {
      // Add your send message logic here
      console.log('Message sent:', message);
      setMessage(''); // Clear the text area after sending the message
    }
  };

  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-between h-full max-w-md w-full p-4 border">
        <MessageHeader />
        
        <ScrollArea className="flex-grow w-full">
          <Message />
        </ScrollArea>
        
        <div className="w-full flex justify-center p-4">
          <Textarea
            className="flex-1 mr-2 p-2 border rounded-lg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <Button variant="outline" className="p-5" onClick={sendMessage}>
            Send
          </Button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
