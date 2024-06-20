"use client";
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { FiImage, FiCamera } from 'react-icons/fi'; // Importing icons from react-icons
import TellsReplyHeader from '@/reuseable_component/TellsReplyHeader';
import { useRouter } from 'next/navigation';
import './ReplyPage.css';

const TellonymPage: React.FC = () => {
  const router = useRouter();
  const [replyMessage, setReplyMessage] = useState('');
  const tellId = '123'; // This should be dynamically set, hardcoded here for example

  const handleSend = async () => {
    try {
      const response = await fetch('/tellsreply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tellId, replyMessage }),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Tell replied successfully');
        router.push('/inbox'); // Redirect to inbox
      } else {
        alert('Error: ' + result.error);
      }
    } catch (error) {
      console.error('Error sending reply:', error);
      alert('An error occurred while sending the reply');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <TellsReplyHeader />
      <div className="bg-white shadow-md rounded-b-lg p-6">
        <div className="mb-4">
          <p className="text-pink-600 font-bold">Sender Hint available</p>
          <p className="text-gray-600">TellonymPlus</p>
        </div>
        <div className="mb-6">
          <label htmlFor="question" className="block text-gray-700 mb-2">
            any ideas of what to wear on a date
          </label>
          <Input
            type="text"
            id="replyMessage"
            placeholder="Your answer"
            value={replyMessage}
            onChange={(e) => setReplyMessage(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FiCamera className="text-gray-600 text-xl mr-2" /> {/* Camera Icon */}
            <FiImage className="text-gray-600 text-xl" /> {/* Image Icon */}
          </div>
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default TellonymPage;
