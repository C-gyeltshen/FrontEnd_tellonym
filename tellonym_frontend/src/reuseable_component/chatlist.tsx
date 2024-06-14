import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ChatList = () => {
  return (
    <div className='flex justify-between border border-gray-100 rounded-lg p-3'>
      <div className='flex items-center'>
        <Card className='profile-card w-19 h-16'>
          profile 
        </Card>
        <div className='px-2 ml-2'>
          <div>
            username {/* Replace with actual username */}
          </div>
          <div>
            message {/* Replace with actual message */}
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <div className=''>
          time {/* Replace with actual time */}
        </div>
      </div>
    </div>
  );
};

export default ChatList;
