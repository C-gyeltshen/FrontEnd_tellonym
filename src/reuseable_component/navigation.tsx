'use client';

import React from 'react';
import { GoHome } from "react-icons/go";
import { LuInbox } from "react-icons/lu";
import { BsChatLeftText } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useRouter } from 'next/navigation';

const Navigation = () => {
  const router = useRouter();

  return (
    <div className="flex space-x-16 items-stretch">
      <div className="text-xl cursor-pointer" onClick={() => router.push('/homePage')}>
        <GoHome />
      </div>
      <div className="text-xl cursor-pointer" onClick={() => router.push('/inbox')}>
        <LuInbox />
      </div>
      <div className="text-xl cursor-pointer" onClick={() => router.push('/chats')}>
        <BsChatLeftText />
      </div>
      <div className="text-xl cursor-pointer" onClick={() => router.push('/Profile')}>
        <CgProfile />
      </div>
    </div>
  );
};

export default Navigation;
