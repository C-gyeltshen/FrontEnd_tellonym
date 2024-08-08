<<<<<<< Updated upstream
import React from 'react';
import { Message } from '@/types/types';
=======
import React from "react";
import { VscCheckAll } from "react-icons/vsc"; // Seen icon
import { Message } from "@/types/types"; // Update the import path
import { ScrollArea } from "@/components/ui/scroll-area"

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

interface ChatMessageProps {
  messages: Message[];
}

const ChatMessage: React.FC<ChatMessageProps> = ({ messages }) => {
  return (
<<<<<<< Updated upstream
    <div className="p-4 space-y-4">
=======
    <div className="flex flex-col space-y-4">
      <ScrollArea>
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
      </ScrollArea>
    </div>
  );
};

export default ChatMessage;