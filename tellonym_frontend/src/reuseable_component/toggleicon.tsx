import React, { useState } from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

const ToggleIcon = () => {
    const [isLiked, setIsLiked] = useState(false);

    const handleIconClick = () => {
        setIsLiked(!isLiked);
    };


    return (
        <div onClick={handleIconClick} className="cursor-pointer">
            {isLiked ? (
                <AiFillLike className="text-xl text-gray-600 hover:text-gray-800" />
            ) : (
                <AiOutlineLike className="text-xl text-black hover:text-gray-800" />
            )}
        </div>
    
    );
};

export default ToggleIcon;

