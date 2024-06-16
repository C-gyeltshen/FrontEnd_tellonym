import React from "react";
import Link from "next/link";
import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { VscSend } from "react-icons/vsc";
import TellsList from "../reuseable_component/tells"; // Assuming TellsList renders multiple Tells components
import { ScrollArea } from "../components/ui/scroll-area";

const ProfileCard = () => {
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
              <Link href="/followers">
                <span className="cursor-pointer text-sm text-gray-500">Followers</span>
              </Link>

            </div>
            <div className="text-center">
              <div className="text-lg font-bold">1,194</div>
              <div className="text-sm text-gray-500">Tells</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">10</div>
              <Link href="/following">
              <span className="cursor-pointer text-sm text-gray-500">Followings</span>
              </Link>
            </div>
          </div>
          <div className="flex justify-between space-x-4 mb-4">
            <Button variant="outline" className="flex-1 flex items-center justify-center">
              Send Tells
              <VscSend className="text-pink-500"/>
            </Button>
            <Button variant="outline" className="flex-1">
              Message
            </Button>
          </div>
          <div className="mt-4">
            <ScrollArea className="max-h-96 overflow-y-auto">
              <TellsList />
            </ScrollArea>
          </div>
        </div>
      </CardContent>
    </div>
  );
};

export default ProfileCard;
