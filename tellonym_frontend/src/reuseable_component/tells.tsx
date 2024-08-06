"use client"
import React from "react";
import { Avatar, AvatarImage } from "../components/ui/avatar"; 
import { ScrollArea } from "../components/ui/scroll-area";
import { BiLike } from "react-icons/bi";
import { FaRegLaughSquint, FaRegSadCry } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
import { IoShareOutline } from "react-icons/io5";
import { Button } from "../components/ui/button"; 
import ToggleIcon from "../reuseable_component/toggleicon";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const tellsData = [
  {
    message: "Do you think you can fix a broken person?",
    replies: ["I don't know But I can try at least"],
  },
  { 
    message: "What's your type??",
    replies: ["Meaning Like what type type ?"] },
  {
    message: "How do you handle stress?",
    replies: ["I usually take a walk or listen to music."],
  },
  { 
    message: "Favorite hobby?", 
    replies: ["I love painting and reading books."] 
  },
  { 
    message: "Best advice you've received?", 
    replies: ["Always stay true to yourself."] 
  },
  { 
    message: "are you married ", 
    replies: ["nop!"] 
  },
];

interface TellsProps {
  message: string;
  replies?: string[];
}

const Tells: React.FC<TellsProps> = ({ message, replies = [] }) => {
  const router = useRouter();
  
  return (
    <div className="p-4 mt-4 border-t rounded-lg shadow-sm bg-white">
      <div className="flex items-center space-x-3 mb-2">
        <Avatar>
          <AvatarImage src="/mnt/data/photo_6300669250767011144_y.jpg" className="rounded-full w-12 h-12" />
        </Avatar>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-bold text-base cursor-pointer" onClick={() => router.push("/publicProfile")}>namgyel.8261461</div>
              <div className="text-sm text-gray-500">2 days ago</div>
            </div>
          </div>
        </div>
      </div>
      <p className="mb-4 text-gray-800">{message}</p>
      <ScrollArea className="space-y-2 max-h-48">
        {replies.map((reply, index) => (
          <p key={index} className="border-t pt-2 text-gray-700">{reply}</p>
        ))}
      </ScrollArea>
      <div className="flex items-center space-x-4 justify-between mt-4">
        <div className="flex space-x-2 items-center">
          {/* <BiLike className="text-xl cursor-pointer text-gray-600 hover:text-gray-800" /> */}
          <ToggleIcon/>
          {/* <FaRegLaughSquint className="text-xl cursor-pointer text-gray-600 hover:text-gray-800" />
          <FaRegSadCry className="text-xl cursor-pointer text-gray-600 hover:text-gray-800" /> */}
        </div>
        <div className="flex space-x-2 items-center ml-auto">
          <TbMessageCircle className="text-xl cursor-pointer text-gray-600 hover:text-gray-800" />
          <IoShareOutline className="text-xl cursor-pointer text-gray-600 hover:text-gray-800" />
          <Button className="self-center cursor-pointer bg-pink-500 text-white rounded-full px-4 py-1"  onClick={() => router.push('/tellsend')} >Send Tell</Button>
        </div>
      </div>
    </div>
  );
};

const TellsList: React.FC = () => {
  return (
    <div className="space-y-4">
      {tellsData.map((tell, index) => (
        <Tells key={index} message={tell.message} replies={tell.replies} />
      ))}
    </div>
  );
};

export { Tells, TellsList };
export default TellsList;