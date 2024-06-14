import React from 'react';
import Header from "../../reuseable_component/homepageheader";
import Navigation from "../../reuseable_component/navigation";
import ChatList from '../../reuseable_component/chatlist';
import { ScrollArea } from "@/components/ui/scroll-area";

const HomePage = () => {
  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-between h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg space-y-4">
        <Header />
        <ScrollArea className="flex-grow w-full">
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />

        </ScrollArea>
        <div className="w-full flex justify-center p-4">
          <Navigation />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
