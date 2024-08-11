"use client";
import React, { useEffect, useState } from 'react';
import InboxHeader from '../../reuseable_component/InboxHeader';
import Navigation from '../../reuseable_component/navigation';
import { ScrollArea } from '../../components/ui/scroll-area';
import Tells from '../../reuseable_component/Tells';

const MainLayout: React.FC = () => {
  const [tellsData, setTellsData] = useState<{ id: number; message: string; timestamp: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/private/inbox');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const formattedData = data.map((item: any) => ({
          id: item.id,
          message: item.message,
          timestamp: item.timestamp,
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
        <InboxHeader />
        <ScrollArea className="flex-1 w-full overflow-y-auto">
          {tellsData.map((tell) => (
            <Tells key={tell.id} id={tell.id} message={tell.message} timestamp={tell.timestamp} />
          ))}
        </ScrollArea>
        <div className="w-full flex justify-center p-4">
          <Navigation />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;






