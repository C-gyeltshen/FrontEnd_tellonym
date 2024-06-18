// src/types/types.ts
export interface Message {
  content: string;
  timestamp: string;
  seen: boolean;
  isSender: boolean;
}

export interface MessagePayload extends Message {
  userProfileImage: string;
}

export interface User {
  image: string;
  name: string;
  username: string;
  followers: number;
  tells: number;
  followings: number;
}
