"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import { ScrollArea } from "../components/ui/scroll-area";
import { TbMessageCircle } from "react-icons/tb";
import { IoShareOutline } from "react-icons/io5";
import { Button } from "../components/ui/button";
import ToggleIcon from "../reuseable_component/toggleicon";
import { useRouter } from "next/navigation";

interface TellsProps {
  message: string;
  reply: string | null;
}

const Tells: React.FC<TellsProps> = ({ message, reply }) => {
  const router = useRouter();

  return (
    <div className="p-4 mt-4 border-t rounded-lg shadow-sm bg-white">
      <div className="flex items-center space-x-3 mb-2">
        <Avatar>
          <AvatarImage
            src="/mnt/data/photo_6300669250767011144_y.jpg"
            className="rounded-full w-12 h-12"
          />
        </Avatar>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div>
              <div
                className="font-bold text-base cursor-pointer"
                onClick={() => router.push("/publicProfile")}
              >
                namgyel.8261461
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mb-4 text-gray-800">{message}</p>
      {reply && (
        <ScrollArea className="space-y-2 max-h-48">
          <p className="border-t pt-2 text-gray-700">{reply}</p>
        </ScrollArea>
      )}
      <div className="flex items-center space-x-4 justify-between mt-4">
        <div className="flex space-x-2 items-center">
          <ToggleIcon />
        </div>
        <div className="flex space-x-2 items-center ml-auto">
          <TbMessageCircle className="text-xl cursor-pointer text-gray-600 hover:text-gray-800" />
          <IoShareOutline className="text-xl cursor-pointer text-gray-600 hover:text-gray-800" />
          <Button
            className="self-center cursor-pointer bg-pink-500 text-white rounded-full px-4 py-1"
            onClick={() => router.push("/tellsend")}
          >
            Send Tell
          </Button>
        </div>
      </div>
    </div>
  );
};

const TellsList: React.FC = () => {
  const [tellsData, setTellsData] = useState<TellsProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/tells/replied")
      .then((response) => response.json())
      .then((data) => {
        setTellsData(data);
      })
      .catch((error) => console.error("Error fetching tells:", error));
  }, []);

  return (
    <div className="space-y-4">
      {tellsData.map((tell, index) => (
        <Tells key={index} message={tell.message} reply={tell.reply} />
      ))}
    </div>
  );
};

export { Tells, TellsList };
export default TellsList;
