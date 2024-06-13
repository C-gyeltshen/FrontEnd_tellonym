import React from 'react';
import { GoHome } from "react-icons/go";
import { LuInbox } from "react-icons/lu";
import { BsChatLeftText } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Navigation = () => {
    return (
      <div className="flex space-x-16 items-stretch"> {/* Added space-x-4 for spacing between icons */}
      <GoHome className="text-xl cursor-pointer" />
      <LuInbox className="text-xl cursor-pointer" />
      <BsChatLeftText className="text-xl cursor-pointer" />
      <CgProfile className="text-xl cursor-pointer" />
    </div>
    
    );
  };

  export default Navigation;
  