import React from 'react';
import ProfileCard from '../../reuseable_component/Profile';
import Header from '../../reuseable_component/homepageheader';
import Navigation from '../../reuseable_component/navigation'; // Adjust the path as per your project structure

const App = () => {
  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-start h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg overflow-auto relative">
        <Header />
        <ProfileCard />
        {/* Navigation fixed at the bottom center */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <Navigation />
        </div>
      </main>
    </div>
  );
};

export default App;
