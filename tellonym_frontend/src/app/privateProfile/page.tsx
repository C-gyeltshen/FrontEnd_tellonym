import React from 'react';
import Header from '../../reuseable_component/homepageheader';
import Navigation from '../../reuseable_component/navigation';
import { Button } from '../../components/ui/button';
import { ScrollArea } from '../../components/ui/scroll-area';

const tellsData = [
  { message: "Do you think you can fix a broken person?" },
  { message: "What's your type??" },
  { message: "How do you handle stress?" },
  { message: "Favorite hobby?" },
  { message: "Best advice you've received?" },
  { message: "Best advice you've received?" },  
];

const Tells: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="p-4 mt-4 border-t rounded-lg shadow-sm flex justify-between items-center">
      <p className="mb-4">{message}</p>
      <Button variant="outline" size="sm">Answer</Button>
    </div>
  );
};

const MainLayout = () => {
  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-start h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg overflow-auto relative">
        <Header />
        <ScrollArea className="flex-1 w-full overflow-y-auto">
          {tellsData.map((tell, index) => (
            <Tells key={index} message={tell.message} />
          ))}
        </ScrollArea>
        {/* Navigation fixed at the bottom center */}
        <div className="w-full flex justify-center p-4">
          <Navigation />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
