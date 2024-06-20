"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import TellsReplyHeader from '@/reuseable_component/TellsReplyHeader';

const TellonymPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [replyMessage, setReplyMessage] = useState('');
  const tellId = searchParams.get('tellId');
  const message = searchParams.get('message');

  useEffect(() => {
    if (!tellId || !message) {
      alert('Invalid tell ID or message');
      router.push('/inbox');
    }
  }, [tellId, message, router]);

  const handleSend = async () => {
    try {
      const response = await fetch(/tells/${tellId}/reply, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reply: replyMessage }),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Tell replied successfully');
        router.push('/inbox');
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
            {message}
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
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default TellonymPage;