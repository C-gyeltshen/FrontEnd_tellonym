'use client'

import React from 'react';
import RecommendationCard from './RecommendationCard';

interface RecommendationsProps {
  recommendations: {
    imageUrl: string;
    name: string;
  }[];
}

const Recommendations: React.FC<RecommendationsProps> = ({ recommendations }) => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">People you might like</h2>
        <a href="/all-recommendations" className="text-blue-500">View all</a>
      </div>
      <div className="flex space-x-4 overflow-x-scroll">
        {recommendations.map((recommendation, index) => (
          <RecommendationCard
            key={index}
            imageUrl={recommendation.imageUrl}
            name={recommendation.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
