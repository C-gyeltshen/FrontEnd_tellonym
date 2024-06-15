import React from "react";
import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { VscSend } from "react-icons/vsc";

const OwnProfileCard = () => {
  console.log("OwnProfileCard rendered");
  return (
    <div className="w-full flex flex-col">
      <CardHeader className="flex items-center space-x-4 p-4">
        <Avatar>
          <AvatarImage src="/images/photo_6293953704327495957_y.jpg" />
        </Avatar>
        <div>
          <CardTitle className="text-lg font-bold">UserName</CardTitle>
          <CardDescription className="text-sm text-gray-500">@namgyel.8261461</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-1 relative p-4">
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
          <div className="flex justify-between space-x-4 mb-4">
            <Button variant="outline" className="flex-1 flex items-center justify-center">
              Send Tells
              <VscSend className="ml-2" />
            </Button>
            <Button variant="outline" className="flex-1">
              Message
            </Button>
          </div>
        </div>
      </CardContent>
    </div>
  );
};

export default OwnProfileCard;
