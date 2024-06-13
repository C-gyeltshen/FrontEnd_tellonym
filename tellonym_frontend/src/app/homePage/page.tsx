import React from 'react';
import Tell from "../../reuseable_component/hometells"; 
import Header from "../../reuseable_component/homepageheader";
import Navigation from "../../reuseable_component/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import Recommendation from '@/reuseable_component/recommendation';

const HomePage = () => {
  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-start h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg">
        <div>
          <Header />
        </div>

        <ScrollArea className="flex-grow w-full">
          <Tell
            message="message"
            username="khem"
            timeAgo="2 hours ago"
            avatarUrl="/path/to/avatar.jpg"
            replies="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Tell
            message="message"
            username="khem"
            timeAgo="2 hours ago"
            avatarUrl="/path/to/avatar.jpg"
            replies="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Tell
            message="message"
            username="khem"
            timeAgo="2 hours ago"
            avatarUrl="/path/to/avatar.jpg"
            replies="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <Recommendation/>
          
          <Tell
            message="message"
            username="khem"
            timeAgo="2 hours ago"
            avatarUrl="/path/to/avatar.jpg"
            replies="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          
        </ScrollArea>

        <Navigation />
      </main>
    </div>
  );
};

export default HomePage;
