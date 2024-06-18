"use client";
import {
  Card,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import ChatMessage from "@/reuseable_component/chatmessage";
import MessageHeader from "@/reuseable_component/MessageHeader";
import { VscSend } from "react-icons/vsc"; // Correct import for VscSend
import { Message, MessagePayload, User } from "@/types/types"; // Ensure this import is correct

const socket = io("http://localhost:3001");

const user: User = {
  image: "/mnt/data/image.png", // Path to user avatar image
  name: "Pema Dolker",
  username: "pema.dolker",
  followers: 7,
  tells: 58,
  followings: 7,
};

export default function ChatComponent({ data }: { data: any }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Listen for incoming messages
    socket.on("chat message", (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.off("chat message");
    };
  }, []);

  const sendMessage = () => {
    const payload: MessagePayload = {
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      seen: false,
      isSender: true,
      userProfileImage: data.image // Required field for payload
    };
    socket.emit("chat message", payload);
    setNewMessage("");
    setMessages((prevMessages) => [...prevMessages, payload]);
  };

  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <main className="flex flex-col justify-between h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg space-y-4">
        <MessageHeader user={user} />
        <ScrollArea className="flex-1 overflow-y-auto">
          <ChatMessage messages={messages} />
        </ScrollArea>
        <div className="flex space-x-4 sticky bottom-0 p-4 bg-white border-t border-gray-300">
          <Input
            type="text"
            value={newMessage}
            placeholder="Type your message here. . ."
            onChange={(e) => setNewMessage(e.target.value)}
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
