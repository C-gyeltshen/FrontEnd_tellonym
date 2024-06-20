import React from 'react';
import { Message } from '@/types/types';

interface ChatMessageProps {
  messages: Message[];
}

const ChatMessage: React.FC<ChatMessageProps> = ({ messages }) => {
  return (
    <div className="p-4 space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.isSender ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`p-3 rounded-lg ${
              message.isSender ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
            } max-w-xs`}
          >
            <div className="text-sm">{message.media.content}</div>
            <div className="text-xs text-gray-400">{new Date(message.timestamp).toLocaleTimeString()}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessage;