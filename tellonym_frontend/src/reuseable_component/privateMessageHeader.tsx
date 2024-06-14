import React from 'react';
import { IoSearch } from 'react-icons/io5'; // Importing the search icon from react-icons

const PrivateHeader = () => {
  return (
    <div className=" items-center border-b border-gray-300 py-2 px-20">
      <div className="flex items-center space-x-10"> {/* space-x-4 adds horizontal spacing between children */}
        <h1 className="m-0">tellonym</h1>
      </div>
    </div>
  );
};

export default PrivateHeader;
