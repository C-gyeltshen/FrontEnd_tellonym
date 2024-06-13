import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CgMoreVerticalAlt } from "react-icons/cg";
import Tells from "../reuseable_component/tells"
import Navigation from "../reuseable_component/navigation"

// const Tell = ({ message, username, timeAgo, avatarUrl, replies, reactions }) => {
//   return (
//     <div className="border-b border-gray-200 py-4 px-2 w-full">
//       <div className="flex items-center mb-2">
//         <div className="flex space-x-2 ">
//           <Avatar className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 mr-3">
//               {/* <img className="w-12 h-12 object-cover rounded-full" src={avatarUrl} alt={`${username}'s avatar`} /> */}
//               <AvatarImage src="https://github.com/shadcn.png" />
//               <AvatarFallback>CN</AvatarFallback>
//           </Avatar>
//           <div>
//             <h4 className="text-sm font-semibold">{username}</h4>
//             <p className="text-xs text-gray-500">{timeAgo}</p>
//           </div>
//             <div dir="ltr" >
//               <CgMoreVerticalAlt />
//             </div>
//         </div>
//       </div>
//       <p className="text-sm">{message}</p>
     
//       <div className="mt-4 text-gray-600">{replies}</div>
//       <div className=''>
//         <h1>like</h1>
//         </div>
//     </div>
//   );
// };

// export default Tell;


const Tell = ({ message, username, timeAgo, avatarUrl, replies, reactions }) => {
  return (
    <div className="border-b border-gray-200 py-4 px-2 w-full"> 
      <div className="flex mb-4 space-x-4">
      <div className="flex space-x-2 flex-grow">
        <Avatar className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 mr-3">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='place-self-center'>
          <h4 className="text-sm font-semibold">{username}</h4>
          <p className="text-xs text-gray-500">{timeAgo}</p>
        </div>
      </div>
      <CgMoreVerticalAlt className='place-self-center cursor-pointer' />
    </div>
      <Tells/>
      
      <div>

      </div>

    </div>
  );
};

export default Tell;
