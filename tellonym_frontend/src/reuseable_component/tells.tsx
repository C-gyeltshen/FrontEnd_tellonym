import React from "react";
import { BiLike } from "react-icons/bi";
import { FaRegLaughSquint, FaRegSadCry } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
import { IoShareOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "../components/ui/scroll-area"; // Import the custom ScrollArea

const Tells = ({ message, replies }) => {
  return (
    <div className="p-4 mt-4 border-t rounded-lg shadow-sm">
      <div className="flex items-center space-x-3 mb-2">
        <Avatar>
          <AvatarImage src="/mnt/data/photo_6293953704327495970_y.jpg" /> {/* Update the image src */}
        </Avatar>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-bold">namgyel.8261461</div>
              <div className="text-sm text-gray-500">2 days ago</div>
            </div>
            <Button variant="outline" size="sm" className="ml-2">Edit</Button>
          </div>
        </div>
      </div>
      <p className="mb-4">{message}</p>
      <ScrollArea className="space-y-2 max-h-48"> {/* Adjust height as needed */}
        {replies.map((reply, index) => (
          <p key={index} className="border-t pt-2 text-gray-700">{reply}</p>
        ))}
      </ScrollArea>
      <div className="flex items-center space-x-4 justify-between mt-4">
        <div className="flex space-x-2 items-center">
          <BiLike className="text-xl cursor-pointer" />
          <FaRegLaughSquint className="text-xl cursor-pointer" />
          <FaRegSadCry className="text-xl cursor-pointer" />
        </div>
        <div className="flex space-x-2 items-center ml-auto">
          <TbMessageCircle className="text-xl cursor-pointer" />
          <IoShareOutline className="text-xl cursor-pointer" />
          <Button className="self-center cursor-pointer">Send Tells</Button>
        </div>
      </div>
    </div>
  );
};

export default Tells;
