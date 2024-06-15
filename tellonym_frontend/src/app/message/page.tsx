import React from 'react';

import { ScrollArea } from "@/components/ui/scroll-area";
import Message from "../../reuseable_component/message"
import MessageHeader from '@/reuseable_component/messageHeader'
import ChatMessage from '@/reuseable_component/chatmessage';

const HomePage = () => {

return (

<div className="flex justify-center items-start h-screen bg-gray-100">

<main className="flex flex-col items-center justify-between h-full max-w-md w-full p-4 border">

<MessageHeader/>

<ScrollArea className="flex-grow w-full">
<ChatMessage/>
<Message/>

</ScrollArea>

<div className="w-full flex justify-center p-4">

</div>

</main>

</div>

);

};

export default HomePage;