import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import MessageHeader from '@/reuseable_component/messageHeader';
import { Textarea } from "@/components/ui/textarea";
import ChatMessage from '@/reuseable_component/chatmessage';
import { IoSend } from "react-icons/io5"; 

const HomePage = () => {
  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-between h-full max-w-md w-full p-4 border">
        <MessageHeader />
        <ScrollArea className="flex-grow w-full">
          <ChatMessage />
        </ScrollArea>
        <div className="w-full flex justify-center p-4">
          <div className="relative w-full">
            <Textarea className="w-full pr-12" placeholder="Start typing here..." />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer">
              <IoSend/>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
