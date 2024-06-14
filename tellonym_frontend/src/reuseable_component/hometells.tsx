import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CgMoreVerticalAlt } from "react-icons/cg";
import Tells from "../reuseable_component/tells"
import Navigation from "../reuseable_component/navigation"

const Tell = () => {
  return (
    <div className="border-b border-gray-200 py-4 px-2 w-full"> 
      <div className="flex mb-4 space-x-4">
      <div className="flex space-x-2 flex-grow">
        <Avatar className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 mr-3">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='place-self-center'>
          <h4 className="text-sm font-semibold">username</h4>
          <p className="text-xs text-gray-500">time</p>
        </div>
      </div>
      <CgMoreVerticalAlt className='place-self-center cursor-pointer' />
    </div>
      <Tells/>
      
      <div>

      </div>

    </div>
  );
};

export default Tell;
