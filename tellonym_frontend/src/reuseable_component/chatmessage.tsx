import React from "react";
import { VscCheckAll } from "react-icons/vsc"; // Seen icon
import { Message } from "@/types/types"; // Update the import path

interface ChatMessageProps {
  messages: Message[];
}

const ChatMessage: React.FC<ChatMessageProps> = ({ messages }) => {
  return (
    <div className="flex flex-col space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.isSender ? 'justify-end' : 'justify-start'}`}
        >
          <div className={`p-2 rounded-lg ${message.isSender ? 'bg-blue-100' : 'bg-gray-100'}`}>
            <div>{message.content}</div>
            <div className="text-xs text-gray-500 flex items-center space-x-1">
              <span>{message.timestamp}</span>
              {message.seen && <VscCheckAll className="text-blue-500" />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessage;
