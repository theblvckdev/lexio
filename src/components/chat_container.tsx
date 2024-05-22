"use client";

import React, { useState } from "react";
import Logo from "./logo";

const ChatContainer = () => {
  const [chatData, setChatData] = useState<boolean>(false);

  return (
    <>
      {chatData ? (
        <div className="h-full lg:px-0 md:px-5 px-3 overflow-y-auto"></div>
      ) : (
        <div className="h-full lg:px-0 md:px-5 px-3 overflow-y-auto grid place-items-center">
          <h1 className="text-4xl font-bold text-white">Zolak AI Chatbot</h1>
        </div>
      )}
    </>
  );
};

export default ChatContainer;
