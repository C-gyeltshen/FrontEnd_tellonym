import React from 'react';
import { IoSearch } from 'react-icons/io5'; // Importing the search icon from react-icons

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center border-b border-gray-300 py-2 px-20">
      <div className="flex items-center space-x-10"> {/* space-x-4 adds horizontal spacing between children */}
        <h1 className="m-0">Followers</h1>

      </div>
    </div>
  );
};

export default Header;
