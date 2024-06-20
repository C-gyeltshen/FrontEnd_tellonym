"use client";

import React, { useState } from 'react';
import Header from '@/reuseable_component/homepageheader';
import Navigation from '@/reuseable_component/navigation';
import ChatList from '@/reuseable_component/chatlist';
import ChatComponent from '../chat_components/page';
import { ScrollArea } from '@/components/ui/scroll-area';
import { User, Chat } from '@/types/types';

const HomePage = () => {
  const [view, setView] = useState<'chatList' | 'chatMessages'>('chatList');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const chats: Chat[] = [
    { avatarSrc: "/mnt/data/photo_6300669250767011144_y.jpg", username: "pema.dolker", message: "Unga bunga", timestamp: "7d" }
  ];

  const handleChatSelect = (chat: Chat) => {
    const user: User = {
      image: chat.avatarSrc,
      name: chat.username,
      username: chat.username,
      followers: 7,
      tells: 58,
      followings: 7,
    };
    setSelectedUser(user);
    setView('chatMessages');
  };

  const handleBack = () => {
    setView('chatList');
    setSelectedUser(null);
  };

  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-between h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg space-y-4">
        {view === 'chatList' ? (
          <>
            <Header />
            <ScrollArea className="flex-grow w-full">
              {chats.map((chat, index) => (
                <ChatList
                  key={index}
                  avatarSrc={chat.avatarSrc}
                  username={chat.username}
                  message={chat.message}
                  timestamp={chat.timestamp}
                  onClick={() => handleChatSelect(chat)}
                />
              ))}
            </ScrollArea>
            <div className="w-full flex justify-center p-4">
              <Navigation />
            </div>
          </>
        ) : (
          selectedUser && (
            <ChatComponent data={selectedUser} onBack={handleBack} />
          )
        )}
      </main>
    </div>
  );
};

export default HomePage;