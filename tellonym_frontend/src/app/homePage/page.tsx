import React from 'react';
import Tell from "../../reuseable_component/hometells"; 
import Header from "../../reuseable_component/homepageheader";
import Navigation from "../../reuseable_component/navigation"

const HomePage = () => {
  return (
    
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-start h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg">
        <div>
          <Header />
        </div>
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
        
        <div className="flex-grow"></div> {/* This will push the Navigation to the bottom */}
        <Navigation />
      </main>
    </div>
  );
};

export default HomePage;
