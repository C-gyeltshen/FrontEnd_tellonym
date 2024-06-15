import React from 'react';
import Header from '../../reuseable_component/homepageheader'; // Adjust the import path as needed
import Navigation from '../../reuseable_component/navigation'; // Adjust the import path as needed
import OwnProfileCard from '../../reuseable_component/ownProfile'; // Adjust the import path as needed
import Tells from '../../reuseable_component/tells'; // Adjust the import path as needed

const MainLayout = () => {
  console.log("MainLayout rendered");
  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-start h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg overflow-auto relative">
        <Header />
        <OwnProfileCard />
        <div className="w-full flex justify-center p-4 mt-4">
          <Tells />
        </div>
        <div className="w-full flex justify-center p-4">
          <Navigation />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
