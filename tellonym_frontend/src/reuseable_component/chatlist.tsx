import React from 'react';

interface ChatListProps {
  avatarSrc: string;
  username: string;
  message: string;
  timestamp: string;
  onClick: () => void;
}

const ChatList: React.FC<ChatListProps> = ({ avatarSrc, username, message, timestamp, onClick }) => {
  return (
    <div onClick={onClick} className="flex items-center space-x-4 p-4 hover:bg-gray-200 cursor-pointer">
      <img src={avatarSrc} alt={username} className="w-12 h-12 rounded-full" />
      <div className="flex flex-col">
        <span className="font-bold">{username}</span>
        <span className="text-gray-600">{message}</span>
      </div>
      <span className="text-gray-400 text-sm">{timestamp}</span>
    </div>
  );
};

export default ChatList;