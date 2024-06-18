'use client'

import React from 'react';

interface RecommendationCardProps {
  imageUrl: string;
  name: string;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ imageUrl, name }) => {
  return (
    <div className="flex flex-col items-center p-2 bg-white shadow-md rounded-lg">
      <img src={imageUrl} alt={name} className="w-24 h-24 rounded-full object-cover" />
      <p className="mt-2 text-sm text-center">{name}</p>
    </div>
  );
};

export default RecommendationCard;
