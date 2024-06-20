// /src/types/types.ts
export interface User {
  image: string;
  name: string;
  username: string;
  followers: number;
  tells: number;
  followings: number;
}

export interface Message {
  room_id: string;
  from: string;
  to: string;
  media: {
    type: string;
    content: string;
  };
  timestamp: string;
  isSender: boolean;
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
  isSender: boolean;
}

export interface Chat {
  avatarSrc: string;
  username: string;
  message: string;
  timestamp: string;
}