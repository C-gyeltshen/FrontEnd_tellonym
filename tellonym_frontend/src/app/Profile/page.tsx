import React from 'react'; 
import Header from '../../reuseable_component/homepageheader'; 
import Navigation from '../../reuseable_component/navigation'; 
import OwnProfileCard from '../../reuseable_component/ownProfile'; 
import TellsList from '../../reuseable_component/tells'; 
import { ScrollArea } from '../../components/ui/scroll-area'; 

const MainLayout = () => { 
  return ( 
    <div className="flex justify-center items-start h-screen bg-gray-100"> 
      <main className="flex flex-col items-center justify-start h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg overflow-hidden relative"> 
        <Header /> 
        <OwnProfileCard /> 
        <div className="w-full flex justify-center p-4 mt-4 overflow-y-auto flex-grow"> 
          {/* <TellsList />  */}
        </div> 
        <div className="w-full flex justify-center p-4 bg-white border-t border-gray-300 absolute bottom-0 left-0 right-0"> 
          <Navigation /> 
        </div> 
      </main> 
    </div> 
  ); 
}; 

export default MainLayout;