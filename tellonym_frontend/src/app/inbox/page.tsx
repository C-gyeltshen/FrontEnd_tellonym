"use client";
import React, { useEffect, useState } from 'react';
import InboxHeader from '../../reuseable_component/InboxHeader';
import Navigation from '../../reuseable_component/navigation';
import { Button } from '../../components/ui/button';
import { ScrollArea } from '../../components/ui/scroll-area';
import { useRouter } from 'next/navigation';

// Define the Tells component as before
const Tells: React.FC<{ message: string; timestamp: string }> = ({ message, timestamp }) => {
  const router = useRouter();
  return (
    <div className="p-4 mt-4 border-t rounded-lg shadow-sm flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="mb-2 md:mb-0 md:mr-4 md:flex-1">
        <p>{message}</p>
      </div>
      <div className="flex items-center mt-2 md:mt-0 md:ml-4" onClick={() => router.push('/tellsreply')}>
        <Button variant="outline" size="sm">Answer</Button>
        <p className="ml-2 text-sm text-gray-500">{timestamp}</p>
      </div>
    </div>
  );
};

const MainLayout: React.FC = () => {
  const [tellsData, setTellsData] = useState<{ message: string; timestamp: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/private/inbox'); // Adjust the URL as necessary
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Map backend data to the expected format
        const formattedData = data.map((item: any) => ({
          message: item.message,
          timestamp: item.timestamp // Adjust according to your actual data structure
        }));
        setTellsData(formattedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-start h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg overflow-auto relative">
        <InboxHeader /> {/* Using the InboxHeader component */}
        <ScrollArea className="flex-1 w-full overflow-y-auto">
          {tellsData.map((tell, index) => (
            <Tells key={index} message={tell.message} timestamp={tell.timestamp} />
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
