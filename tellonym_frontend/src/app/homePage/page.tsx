import React from 'react';
import Header from '../../reuseable_component/homepageheader';
import Navigation from '../../reuseable_component/navigation';
import { ScrollArea } from '../../components/ui/scroll-area';
import TellsList from '../../reuseable_component/tells';
import Recommendations from '../../reuseable_component/Recommendations';

// Dummy data for recommendations
const dummyRecommendations = [
  { imageUrl: 'https://example.com/image1.jpg', name: 'User 1' },
  { imageUrl: 'https://example.com/image2.jpg', name: 'User 2' },
  { imageUrl: 'https://example.com/image3.jpg', name: 'User 3' },
];

const MainLayout = () => {
  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-start h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg overflow-auto relative">
        <Header />
        <ScrollArea className="flex-1 w-full overflow-y-auto">
          <TellsList />
          <Recommendations recommendations={dummyRecommendations} />
        </ScrollArea>
        <div className="w-full flex justify-center p-4">
          <Navigation />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;