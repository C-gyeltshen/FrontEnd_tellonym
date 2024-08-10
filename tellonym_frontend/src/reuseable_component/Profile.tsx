'use client'
import React from "react";
import { 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
} from "@/components/ui/card"; 
import { Avatar, AvatarImage } from "@/components/ui/avatar"; 
import { Button } from "@/components/ui/button"; 
import { VscSend } from "react-icons/vsc"; 
import Tells from "../reuseable_component/tells"; 
import { ScrollArea } from "../components/ui/scroll-area"; 
import { useRouter } from 'next/navigation'; 

const ProfileCard = () => { 
  const router = useRouter(); 

  return ( 
    <ScrollArea className="w-full flex flex-col h-screen"> 
      <CardHeader className="flex items-center space-x-4 p-4"> 
        <Avatar> 
          <AvatarImage src="/images/photo_6293953704327495957_y.jpg" /> 
        </Avatar> 
        <div> 
          <CardTitle className="text-lg font-bold">UserName</CardTitle> 
          <CardDescription className="text-sm text-gray-500">haha.8261461</CardDescription> 
        </div> 
      </CardHeader> 
      <CardContent className="flex-1 relative overflow-y-auto p-4"> 
        <div className="text-center mb-4"> 
          <div className="flex justify-around mb-4"> 
            <div className="text-center"> 
              <div className="text-lg font-bold">9</div> 
              <span 
                className="cursor-pointer text-sm text-gray-500"
                onClick={() => router.push('/followers')}
              >
                Followers
              </span> 
            </div> 
            <div className="text-center"> 
              <div className="text-lg font-bold">1,194</div> 
              <div className="text-sm text-gray-500">Tells</div> 
            </div> 
            <div className="text-center"> 
              <div className="text-lg font-bold">10</div> 
              <span 
                className="cursor-pointer text-sm text-gray-500"
                onClick={() => router.push('/following')}
              >
                Followings
              </span> 
            </div> 
          </div> 
          <Button variant="outline" className="mx-2">Unfollow</Button> 
          <Button variant="outline" className="mx-2" onClick={() => router.push('/message')}>Message</Button> 
        </div> 
        <div className="flex justify-center mb-4"> 
          <Button 
            variant="outline" 
            className="relative w-full max-w-xs" 
            onClick={() => router.push('/tellsend')}
          > 
            <VscSend className="text-black mr-2" /> 
            Send anonymous Tell 
          </Button> 
        </div> 
        <div className="mt-4"> 
          {/* Renders TellsList instead of individual Tells */} 
          <Tells /> 
        </div> 
      </CardContent> 
    </ScrollArea> 
  ); 
}; 

export default ProfileCard;
