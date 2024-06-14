import React from "react";
import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VscSend } from "react-icons/vsc";
import Tells from "../reuseable_component/tells";
import { ScrollArea } from "../components/ui/scroll-area";

const ProfileCard = () => {
  return (
    <ScrollArea className="w-full flex flex-col h-screen">
      <CardHeader className="flex items-center space-x-4 p-4">
        <Avatar>
          <AvatarImage src="/images/photo_6293953704327495957_y.jpg" />
        </Avatar>
        <div>
          <CardTitle className="text-lg font-bold">UserName</CardTitle>
          <CardDescription className="text-sm text-gray-500">@namgyel.8261461</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-1 relative overflow-y-auto p-4">
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
          <div className="relative w-full max-w-xs">
            <Input placeholder="Send anonymous Tell..." className="w-full pr-10" />
            <button className="absolute inset-y-0 right-0 flex items-center pr-3">
              <VscSend className="text-black" />
            </button>
          </div>
        </div>
        <div className="mt-4">
          {/* Renders TellsList instead of individual Tells */}
          <Tells />
        </div>
      </CardContent>
    </ScrollArea>
  );
};

export default ProfileCard;
