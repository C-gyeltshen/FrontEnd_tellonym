"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../components/ui/button';

const Tells: React.FC<{ id: number; message: string; timestamp: string }> = ({ id, message, timestamp }) => {
  const router = useRouter();
  const handleAnswerClick = () => {
    router.push(/tellsreply?tellId=${id}&message=${encodeURIComponent(message)});
  };

  return (
    <div className="p-4 mt-4 border-t rounded-lg shadow-sm flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="mb-2 md:mb-0 md:mr-4 md:flex-1">
        <p>{message}</p>
      </div>
      <div className="flex items-center mt-2 md:mt-0">
        <Button variant="outline" size="sm" onClick={handleAnswerClick}>Answer</Button>
        <p className="ml-2 text-sm text-gray-500">{timestamp}</p>
      </div>
    </div>
  );
};

export default Tells;