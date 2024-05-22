import React from "react";
import { IoArrowUp } from "react-icons/io5";
import Button from "./button";

const ChatTextArea = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full mb-5 lg:px-2 md:px-5 px-3">
      <form className="flex flex-row items-center gap-3 pr-1.5 bg-transparent ring-1 ring-gray-600 shadow-md rounded-md w-full">
        <input
          type="text"
          className="outline-none box-border w-full text-white bg-transparent p-3"
          placeholder="Message Zolak"
        />

        <Button
          content={<IoArrowUp />}
          variant="bg-white"
          radius="rounded-md"
        />
      </form>
    </div>
  );
};

export default ChatTextArea;
