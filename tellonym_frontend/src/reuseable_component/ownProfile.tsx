'use client'
import React, { useEffect, useState } from "react";
import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import axios from 'axios';

function ProfileCard() {
  const router = useRouter();
  const [name, setName] = useState('');
  
  useEffect(() => {
    // Fetch the user profile information
    axios.get('http://localhost:8080/profile', { withCredentials: true })
      .then(res => {
        if (res.data.valid) {
          setName(res.data.username);
        } else {
          router.push('/login');
        }
      })
      .catch(() => {
        router.push('/login');
      });
  }, [router]);

  return (
    <div className="w-full flex flex-col">
      <CardHeader className="flex items-center space-x-4 p-4">
        {/* <Avatar>
          <AvatarImage src="/images/photo_6293953704327495957_y.jpg" />
        </Avatar> */}
        <div>
          <CardTitle className="text-lg font-bold">Username: {name}</CardTitle>
          <CardDescription className="text-sm text-gray-500">@namgyel.8261461</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-1 relative p-4">
        <div className="text-center mb-4">
          <div className="flex justify-around mb-4">
            <div className="text-center">
              <div className="text-lg font-bold">9</div>
              <span
                className="cursor-pointer text-sm text-gray-500"
                onClick={() => router.push('/followers')}
              >
                Followers
              </span>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">1,194</div>
              <div className="text-sm text-gray-500">Tells</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">10</div>
              <span
                className="cursor-pointer text-sm text-gray-500"
                onClick={() => router.push('/following')}
              >
                Followings
              </span>
            </div>
          </div>
          <div className="flex justify-between space-x-4 mb-4">
            <Button
              variant="outline"
              className="flex-1 flex items-center justify-center"
              onClick={() => router.push('/tellsend')}
            >
              Send Tells
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => router.push('/message')}
            >
              Message
            </Button>
          </div>
          <div className="mt-4">
            {/* <ScrollArea className="max-h-96 overflow-y-auto">
              <TellsList />
            </ScrollArea> */}
          </div>
        </div>
      </CardContent>
    </div>
  );
}

export default ProfileCard;
