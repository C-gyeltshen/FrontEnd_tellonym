"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Tells from "../reuseable_component/tells";
import React from "react";
import { ScrollArea } from "../components/ui/scroll-area"; 
import Navigation from "../reuseable_component/navigation";

const ProfileCard = () => {
  // Example messages and replies
  const tellsData = [
    { message: "Do you think you can fix a broken person?", replies: ["I don't know But I can try at least"] },
    { message: "What's your type??", replies: ["Meaning Like what type type ?"] },
    { message: "How do you handle stress?", replies: ["I usually take a walk or listen to music."] },
    { message: "Favorite hobby?", replies: ["I love painting and reading books."] },
    { message: "Best advice you've received?", replies: ["Always stay true to yourself."] },
  ];

  return (
    <main className="p-4 flex justify-center">
      <div>
        <div>
        <ScrollArea className="h-64"> {/* Adjust height as needed */}

          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/mnt/data/photo_6293953704327495970_y.jpg" /> {/* Update the image src */}
              </Avatar>
              <div>
                <CardTitle className="text-lg font-bold">UserName</CardTitle>
                <CardDescription className="text-sm text-gray-500">@namgyel.8261461</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <div className="flex justify-around mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold">9</div>
                  <div className="text-sm text-gray-500">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">1,194</div>
                  <div className="text-sm text-gray-500">Tells</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">10</div>
                  <div className="text-sm text-gray-500">Followings</div>
                </div>
              </div>
              <Button variant="outline" className="mx-2">Unfollow</Button>
              <Button variant="outline" className="mx-2">Message</Button>
            </div>
            <div className="flex justify-center mb-4">
              <Input placeholder="Send anonymous Tell..." className="w-full max-w-xs" />
            </div>
            <div className="mt-4">
                {tellsData.map((tell, index) => (
                  <Tells key={index} message={tell.message} replies={tell.replies} />
                ))}
            </div>
          </CardContent>
          <CardFooter>
            {/* Add additional content or components here */}
          </CardFooter>
          </ScrollArea>
        </div>
        <Navigation/>

      </div>
      
    </main>
  );
};

export default ProfileCard;
