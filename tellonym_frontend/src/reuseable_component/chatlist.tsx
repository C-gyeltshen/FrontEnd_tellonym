import React from 'react';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
>>>>>>> Stashed changes

interface ChatListProps {
  avatarSrc: string;
  username: string;
  message: string;
  timestamp: string;
  onClick: () => void;
}

const ChatList: React.FC<ChatListProps> = ({ avatarSrc, username, message, timestamp, onClick }) => {
  return (
<<<<<<< Updated upstream
    <div onClick={onClick} className="flex items-center space-x-4 p-4 hover:bg-gray-200 cursor-pointer">
      <img src={avatarSrc} alt={username} className="w-12 h-12 rounded-full" />
      <div className="flex flex-col">
        <span className="font-bold">{username}</span>
        <span className="text-gray-600">{message}</span>
=======
    <div className='flex justify-between border border-gray-100 rounded-lg p-3 mb-2'>
      <div className='flex items-center'>
        <ScrollArea>
        <Card className='profile-card w-16 h-16'>
          <img src={avatarSrc} alt="Avatar" className='w-full h-full rounded-full' />
        </Card>
        <div className='px-2 ml-2'>
          <div className='font-bold text-sm'>
            {username}
          </div>
          <div className='text-gray-500 text-xs'>
            {message}
          </div>
        </div>
        </ScrollArea>
      </div>
      <div className='flex items-center'>
        <div className='text-gray-400 text-xs'>
          {timestamp}
        </div>
>>>>>>> Stashed changes
      </div>
      <span className="text-gray-400 text-sm">{timestamp}</span>
    </div>
  );
};

export default ChatList;