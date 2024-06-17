import React from 'react';
import { MdOutlineArrowBack } from "react-icons/md";
import { CgMoreVerticalAlt } from "react-icons/cg";

const MessageHeader = () => {
  
   return (
    <main className='flex p-3'>
  <div className='flex w-full items-center text-xl cursor-pointer justify-between'>
    <div className='flex items-center justify-between'>
      <MdOutlineArrowBack />
    </div>
    <div className='flex-grow text-center'>
      <h1>UserName</h1>
    </div>
    <div className='flex items-center'>
      <CgMoreVerticalAlt className='cursor-pointer' />
    </div>
  </div>
</main>

  
  
  
  
  );
};

export default MessageHeader;
