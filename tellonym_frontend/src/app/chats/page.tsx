import React from 'react';
import Header from "../../reuseable_component/homepageheader";
import Navigation from "../../reuseable_component/navigation";
import ChatList from '../../reuseable_component/chatlist';
import { ScrollArea } from "@/components/ui/scroll-area"


const HomePage = () => {
  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-start h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg space-y-4">
        <div className="space-y-4">
          <Header />
          <ScrollArea className="flex-grow w-full">
          <ChatList />
          <ChatList />
          
          </ScrollArea>
        </div>
    
        <Navigation />
      </main>
    </div>
  );
};

export default HomePage;
