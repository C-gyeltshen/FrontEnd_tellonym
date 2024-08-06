import React from 'react';
import { IoSearch } from 'react-icons/io5'; // Importing the search icon from react-icons

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center border-b border-gray-300 py-2 px-20 relative">
      <h1 className="m-0 absolute left-1/2 transform -translate-x-1/2">tellonym</h1>
      <div className="flex items-center space-x-10">
        <IoSearch className="text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
