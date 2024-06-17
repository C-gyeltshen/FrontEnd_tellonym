import React from 'react';
import Header from "../../reuseable_component/homepageheader";
import Navigation from "../../reuseable_component/navigation";
import ChatList from '../../reuseable_component/chatlist';
import { ScrollArea } from "@/components/ui/scroll-area";

const HomePage = () => {
  const chats = [
    { avatarSrc: "/mnt/data/photo_6300669250767011144_y.jpg", username: "yeshi_hazard_11", message: "Oie", timestamp: "6d" },
    { avatarSrc: "/mnt/data/photo_6300669250767011144_y.jpg", username: "pema.dolker", message: "Unga bunga", timestamp: "7d" },
    { avatarSrc: "/mnt/data/photo_6300669250767011144_y.jpg", username: "john.doe", message: "Hello there!", timestamp: "5d" },
    { avatarSrc: "/mnt/data/photo_6300669250767011144_y.jpg", username: "jane.smith", message: "What's up?", timestamp: "4d" },
    { avatarSrc: "/mnt/data/photo_6300669250767011144_y.jpg", username: "alice.wonder", message: "Good morning!", timestamp: "3d" },
    { avatarSrc: "/mnt/data/photo_6300669250767011144_y.jpg", username: "bob.builder", message: "Can we fix it?", timestamp: "2d" },
    { avatarSrc: "/mnt/data/photo_6300669250767011144_y.jpg", username: "charlie.brown", message: "Snoopy!", timestamp: "1d" },
    // Add more chat data as needed
  ];

  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-between h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg space-y-4">
        <Header />
        <ScrollArea className="flex-grow w-full">
          {chats.map((chat, index) => (
            <ChatList
              key={index}
              avatarSrc={chat.avatarSrc}
              username={chat.username}
              message={chat.message}
              timestamp={chat.timestamp}
            />
          ))}
        </ScrollArea>
        <div className="w-full flex justify-center p-4">
          <Navigation />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
