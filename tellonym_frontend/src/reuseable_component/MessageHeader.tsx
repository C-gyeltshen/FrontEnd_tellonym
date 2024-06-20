import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/types/types"; // Import the User type
import { IoArrowBack } from "react-icons/io5"; // Import back arrow icon
import { BsThreeDotsVertical } from "react-icons/bs"; // Import dots icon
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

interface MessageHeaderProps {
  user: User;
}

const MessageHeader: React.FC<MessageHeaderProps> = ({ user }) => {
  const router = useRouter();

  return (
    <div>
      {/* Header with back button and username
      <div className="flex items-center justify-between p-4 border-b border-gray-300">
        <div onClick={() => router.push('/chats')}>
          <IoArrowBack className="text-xl cursor-pointer" />
        </div>
        <div className="flex items-center space-x-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src={user.image} alt="User Avatar" />
          </Avatar>
          <span className="font-bold">{user.username}</span>
        </div>
        <BsThreeDotsVertical className="text-xl cursor-pointer" />
      </div> */}

      {/* User details */}
      <div className="flex flex-col items-center p-4 border-b border-gray-300">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="rounded-lg w-40 h-40">
            <AvatarImage src={user.image} alt="User Avatar" />
          </Avatar>
          <div className="text-center">
            <h2 className="text-lg font-bold">{user.name}</h2>
            <p className="text-sm text-gray-500">@{user.username}</p>
          </div>
        </div>
        <div className="flex justify-around w-full mt-4">
          <div className="text-center cursor-pointer" onClick={() => router.push('/followers')}>
            <div className="text-lg font-bold">{user.followers}</div>
            <span className="text-sm text-gray-500">Followers</span>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">{user.tells}</div>
            <span className="text-sm text-gray-500">Tells</span>
          </div>
          <div className="text-center cursor-pointer" onClick={() => router.push('/following')}>
            <div className="text-lg font-bold">{user.followings}</div>
            <span className="text-sm text-gray-500">Followings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageHeader;
