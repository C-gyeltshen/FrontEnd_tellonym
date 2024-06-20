export interface Message {
  from: string;
  to: string;
  media: {
    type: string;
    content: string;
  };
  timestamp: string;
  isSender: boolean; // Add this property
}

export interface MessagePayload {
  room_id: string;
  from: string;
  to: string;
  media: {
    type: string;
    content: string;
  };
  timestamp: string;
  isSender: boolean; // Add this property
}

export interface User {
  image: string;
  name: string;
  username: string;
  followers: number;
  tells: number;
  followings: number;
}