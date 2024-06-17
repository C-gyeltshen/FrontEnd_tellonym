import React, { useState } from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';
import { FaRegLaughSquint, FaRegSadCry } from 'react-icons/fa';
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaLaughSquint } from "react-icons/fa";
import { FaRegFaceSadCry } from "react-icons/fa6";
import { FaFaceSadCry } from "react-icons/fa6";



const ToggleIcons = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [isLaughing, setIsLaughing] = useState(false);
    const [isCrying, setIsCrying] = useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    const handleLaughClick = () => {
        setIsLaughing(!isLaughing);
    };

    const handleCryClick = () => {
        setIsCrying(!isCrying);
    };

    return (
        <div className="flex space-x-4">
            <div onClick={handleLikeClick} className="cursor-pointer">
                {isLiked ? (
                    <AiFillLike className="text-xl text-gray-600 hover:text-gray-800" />
                ) : (
                    <AiOutlineLike className="text-xl text-black hover:text-gray-800" />
                )}
            </div>
            <div onClick={handleLaughClick} className="cursor-pointer">
                {isLaughing ? (
                    <FaLaughSquint className="text-xl text-gray-600 hover:text-gray-800" />
                ) : (
                    <FaRegLaughSquint className="text-xl text-black hover:text-gray-800" />
                )}
            </div>
            <div onClick={handleCryClick} className="cursor-pointer">
                {isCrying ? (
                    <FaFaceSadCry className="text-xl text-gray-600 hover:text-gray-800" />
                ) : (
                    <FaRegFaceSadCry className="text-xl text-black hover:text-gray-800" />
                )}
            </div>
        </div>
    );
};

export default ToggleIcons;
