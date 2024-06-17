import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ChatListProps {
  avatarSrc: string;
  username: string;
  message: string;
  timestamp: string;
}

const ChatList: React.FC<ChatListProps> = ({ avatarSrc, username, message, timestamp }) => {
  return (
    <div className='flex justify-between border border-gray-100 rounded-lg p-3 mb-2'>
      <div className='flex items-center'>
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
      </div>
      <div className='flex items-center'>
        <div className='text-gray-400 text-xs'>
          {timestamp}
        </div>
      </div>
    </div>
  );
};

export default ChatList;
