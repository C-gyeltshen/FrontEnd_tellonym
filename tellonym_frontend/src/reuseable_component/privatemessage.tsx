import React from 'react';
import { Button } from "@/components/ui/button"

const Privatetells = () => {
    return (
        <main>
        <div className="flex items-center w-full">
            <span className="flex-grow">private message</span>
            {/* <div className=" flex-col mt-2"> */}
                <span className="absolute top-2 right-2 text-gray-500 text-xs">2d</span>
            {/* </div> */}
        </div>
        <div className='flex justify-end ...'>
        <Button className=" border border-gray-400 rounded px-2 py-1 place-self-end">Answer</Button>
        </div>
        </main>

    );
  };
  
  export default Privatetells;
  