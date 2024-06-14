// Profile.tsx
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import PrivateHeader from "../../reuseable_component/privateMessageHeader";
import Navigation from "../../reuseable_component/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import Privatetells from '../../reuseable_component/privatemessage';

const Profile = () => {
  return (

    <div className="flex justify-center items-start h-screen bg-gray-100">
    <main className="flex flex-col items-center justify-start h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg">

    <PrivateHeader/>
    <ScrollArea className="flex-grow w-full">

      <Privatetells/>
      <Privatetells/>
      <Privatetells/>
      <Privatetells/>
      <Privatetells/>
      <Privatetells/>
      <Privatetells/>
      <Privatetells/>

      
    </ScrollArea>
    <Navigation />

    </main>
    </div>
        
)};
  
export default Profile;
