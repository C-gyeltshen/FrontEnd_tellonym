import React from 'react';

import { ScrollArea } from "@/components/ui/scroll-area";
import MessageHeader from '@/reuseable_component/messageHeader';
import ChatMessage from '@/reuseable_component/chatmessage';
import { IoSendSharp } from "react-icons/io5";


const HomePage = () => {
  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-between h-full max-w-md w-full p-4 border">
        <MessageHeader />
        
        <ScrollArea className="flex-grow w-full">
          <ChatMessage />
        </ScrollArea>

        <div className="w-full flex justify-between items-center space-x-2 p-4">
          <input
            type="text"
            className="flex-grow p-2 border border-gray-300 rounded"
            placeholder="Type your message..."
          />
          <IoSendSharp size={24}/>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
