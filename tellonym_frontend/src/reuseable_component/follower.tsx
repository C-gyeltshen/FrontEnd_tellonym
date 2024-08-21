"use client"; 

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ChatList = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className='flex justify-between border border-gray-100 rounded-lg p-3'>
      <div className='flex items-center'>
        <Card className='profile-card w-19 h-16'>
          profile 
        </Card>
        <div className='px-2 ml-2'>
          <div>
            username {}
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <Button onClick={handleFollowClick}>

          {isFollowing ? 'Unfollow' : 'Follow'}
        </Button>
      </div>
    </div>
  );
};

export default ChatList;


