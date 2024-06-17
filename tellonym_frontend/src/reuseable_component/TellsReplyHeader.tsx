import React from 'react';
import { Button } from '../components/ui/button';

const TellsReplyHeader = () => {
    return (
        <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-white shadow-md rounded-t-lg max-w-md mx-auto relative">
            <div className="text-xl font-bold absolute left-1/2 transform -translate-x-1/2">
                tellonym
            </div>
            <Button variant="ghost" className="text-xl ml-auto">
                &times;
            </Button>
        </div>
    );
};

export default TellsReplyHeader;
