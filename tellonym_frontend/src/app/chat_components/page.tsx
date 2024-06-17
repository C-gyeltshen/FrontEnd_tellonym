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
import MessageHeader from "@/reuseable_component/messageHeader";

const socket = io("http://localhost:3001"); 

export default function ChatComponent({ data }: { data: any }) {
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Listen for incoming messages
    socket.on("chat message", (message) => {
      setMessages((prevMessages: any[]) => [...prevMessages, message]);
    });
  }, []);

  const sendMessage = () => {
    const payload = {
      content: newMessage,
      userProfileImage: data.image,
      userName: data.name,
      userEmail: data.email,
    };
    socket.emit("chat message", payload);
    setNewMessage("");
  };

  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <main className="flex flex-col justify-between h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg space-y-4">
      <MessageHeader/>
        <ScrollArea className="flex-1 overflow-y-auto">
          <ChatMessage />
          <div className="p-4 space-y-4">
            {messages.map((message, index) =>
              data.email === message.userEmail ? (
                <div
                  className="flex flex-row-reverse items-center space-x-2 text-right"
                  key={index}
                >
                  <Card className="max-w-md">
                    <CardHeader>
                      <CardDescription>{message.content}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ) : (
                <div className="flex flex-row items-center space-x-2" key={index}>
                  <Card className="max-w-md">
                    <CardHeader>
                      <CardDescription className="font-bold text-xs text-purple-800">
                        {message.userName}
                      </CardDescription>
                      <CardDescription>{message.content}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              )
            )}
          </div>
        </ScrollArea>
        
        <div className="flex space-x-4 sticky bottom-0 p-4 bg-white border-t border-gray-300">
          <Input
            type="text"
            value={newMessage}
            placeholder="Type your message here. . ."
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1"
          />
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </main>
    </div>
  );
}