"use client";

import React, { useState } from 'react';
import { VscSend } from 'react-icons/vsc';
import { Input } from '@/components/ui/input';

const SendMessagePage = () => {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-between h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg overflow-hidden relative">
        <div className="w-full mb-4">
          <h1 className="text-lg font-semibold text-pink-500">Send Message</h1>
        </div>
        <div className="flex-grow w-full mb-4">
          {/* Add content here if needed */}
        </div>
        <div className="relative w-full max-w-xl">
          <Input
            placeholder="Your message"
            value={message}
            onChange={handleInputChange}
            className="pr-10"
          />
          <button className="absolute inset-y-0 right-0 flex items-center pr-3">
            <VscSend className="text-pink-500" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default SendMessagePage;