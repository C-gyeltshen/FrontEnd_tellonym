import React from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { FiImage, FiCamera } from 'react-icons/fi'; // Importing icons from react-icons
import TellsReplyHeader from '@/reuseable_component/TellsReplyHeader';
import './ReplyPage.css';

const TellonymPage: React.FC = () => {
    return (
        <div className="max-w-md mx-auto">
            <TellsReplyHeader />
            <div className="bg-white shadow-md rounded-b-lg p-6">
                <div className="mb-4">
                    <p className="text-pink-600 font-bold">Sender Hint available</p>
                    <p className="text-gray-600">TellonymPlus</p>
                </div>
                <div className="mb-6">
                    <label htmlFor="question" className="block text-gray-700 mb-2">
                        any ideas of what to wear on a date
                    </label>
                    <Input
                        type="text"
                        id="question"
                        placeholder="Your answer"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <FiCamera className="text-gray-600 text-xl mr-2" /> {/* Camera Icon */}
                        <FiImage className="text-gray-600 text-xl" /> {/* Image Icon */}
                    </div>
                    <Button>Send</Button>
                </div>
            </div>
        </div>
    );
};

export default TellonymPage;
