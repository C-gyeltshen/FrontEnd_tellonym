import React from 'react';
import { MdInbox } from 'react-icons/md';

const InboxHeader: React.FC = () => {
  return (
    <div className="w-full flex border-gray-300 py-2 px-4 relative">
      <h1 className="m-0 absolute left-1/2 transform -translate-x-1/2">tellonym</h1>
      <div className="flex items-center space-x-10 absolute right-0 pr-4">
        <MdInbox className=" right text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default InboxHeader;