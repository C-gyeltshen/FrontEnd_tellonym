import React from 'react';

const Recommendation = (imageSrc, username ) => {
    return (
      <div className="flex flex-col items-center p-2 m-2 w-32 bg-white shadow-md rounded-lg">
        <h1></h1>
      <div className="relative w-24 h-24 rounded-full overflow-hidden">
        <img src={imageSrc} alt={username} className="w-full h-full object-cover" />
      </div>
      <p className="mt-2 text-center text-sm font-semibold">{username}</p>
    </div>
    
    );
  };

  export default Recommendation;
  