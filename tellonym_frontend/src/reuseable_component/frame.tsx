import React from 'react';

import Header from '../reuseable_component/homepageheader';
const Frame = () => {
    return (
        <div className="flex justify-center items-start h-screen bg-gray-100">
        <main className="flex flex-col items-center justify-start h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg">
          <div>
            <Header />
            
          </div>
  
          
        </main>
      </div>
    
    );
  };

  export default Frame;
  