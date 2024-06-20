"use client";

import io from "socket.io-client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ChatMessage from "@/reuseable_component/chatmessage";
import MessageHeader from "@/reuseable_component/MessageHeader";
import { VscSend } from "react-icons/vsc"; 
import { AiOutlineArrowLeft, AiOutlineMore } from "react-icons/ai"; // Import icons
import { Message, MessagePayload, User } from "@/types/types";

const socket = io("http://localhost:3001");

interface ChatComponentProps {
  data: User;
  onBack: () => void;
}

export default function ChatComponent({ data, onBack }: ChatComponentProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const roomId = `room_${data.username}`; 
    socket.emit('join room', roomId);

    socket.on("chat message", (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("chat message");
    };
  }, [data.username]);

  const sendMessage = () => {
    const roomId = `room_${data.username}`; 
    const payload: MessagePayload = {
      room_id: roomId,
      from: data.username,
      to: "receiver_username", 
      media: {
        type: "text",
        content: newMessage,
      },
      timestamp: new Date().toISOString(),
      isSender: true, 
    };
    socket.emit("chat message", payload);
    setNewMessage(""); 
  };

  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <main className="flex flex-col justify-between h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg space-y-4">
        <div className="flex items-center justify-between w-full">
          <button onClick={onBack} className="text-blue-500">
            <AiOutlineArrowLeft className="text-2xl" />
          </button>
          <span className="font-bold">{data.username}</span>
          <AiOutlineMore className="text-2xl" />
        </div>
        <MessageHeader user={data} />
        <div className="flex-1 overflow-y-auto">
          <ChatMessage messages={messages} />
        </div>
        <div className="flex space-x-4 sticky bottom-0 p-4 bg-white border-t border-gray-300">
          <Input
            type="text"
            value={newMessage}
            placeholder="Type your message here..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewMessage(e.target.value)}
            className="flex-1"
          />
          <Button className="p-2 bg-pink-500 text-white rounded-full" onClick={sendMessage}>
            <VscSend />
          </Button>
        </div>
      </main>
    </div>
  );
}