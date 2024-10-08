import React from 'react';
import { IoSearch } from 'react-icons/io5'; 
import { IoArrowBack } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center border-b border-gray-300 py-2 px-20">
      <div className="flex items-center space-x-10"> {/* space-x-4 adds horizontal spacing between children */}
      <button className="text-xl p-2 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 focus:outline-none">
        <IoArrowBack />
      </button>
        <h1 className="m-0">Following</h1>

      </div>
    </div>
  );
};

export default Header;
