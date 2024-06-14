import React from "react";
import { BiLike } from "react-icons/bi";
import { FaRegLaughSquint, FaRegSadCry } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
import { IoShareOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "../components/ui/scroll-area";

type TellsProps = {
  message: string;
  replies?: string[];
};

const tellsData = [
  {
    message: "Do you think you can fix a broken person?",
    replies: ["I don't know But I can try at least"],
  },
  { message: "What's your type??", replies: ["Meaning Like what type type ?"] },
  {
    message: "How do you handle stress?",
    replies: ["I usually take a walk or listen to music."],
  },
  { message: "Favorite hobby?", replies: ["I love painting and reading books."] },
  { message: "Best advice you've received?", replies: ["Always stay true to yourself."] },
];

const Tells: React.FC<TellsProps> = ({ message, replies = [] }) => {
  return (
    <div className="p-4 mt-4 border-t rounded-lg shadow-sm">
      <div className="flex items-center space-x-3 mb-2">
        <Avatar>
          <AvatarImage src="/mnt/data/photo_6293953704327495970_y.jpg" />
        </Avatar>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-bold">namgyel.8261461</div>
              <div className="text-sm text-gray-500">2 days ago</div>
            </div>
          </div>
        </div>
      </div>
      <p className="mb-4">{message}</p>
      <ScrollArea className="space-y-2 max-h-48">
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

const TellsList: React.FC = () => {
  return (
    <div>
      {tellsData.map((tell, index) => (
        <Tells key={index} message={tell.message} replies={tell.replies} />
      ))}
    </div>
  );
};

export { Tells, TellsList };
export default TellsList;
