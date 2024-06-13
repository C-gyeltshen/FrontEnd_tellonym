import React from 'react';
import { BiLike } from "react-icons/bi";
import { FaRegLaughSquint } from "react-icons/fa";
import { FaRegSadCry } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
import { IoShareOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button"


const Tells = ({ message, replies }) => {
    return (
      <div>
      <p>{message}hello</p>
      <p>{replies}hi</p>
      <div className="flex items-center space-x-4 justify-between">
        <div className="flex space-x-2 items-center">
          <BiLike className={"text-xl cursor-pointer ${getButtonClass('like')"
            
          } 
          />
          <FaRegLaughSquint className="text-xl cursor-pointer" />
          <FaRegSadCry className="text-xl cursor-pointer" />
        </div>
        <div className="flex space-x-2 items-center ml-auto">
          <TbMessageCircle className='text-xl cursor-pointer' />
          <IoShareOutline className='text-xl cursor-pointer' />
          <Button className="self-center cursor-pointer">Send Tells</Button>
        </div>
      </div>
    </div>
      
    );
  };
  
  export default Tells;
  