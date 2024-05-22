import React from "react";
import { IoArrowUp } from "react-icons/io5";
import Button from "./button";

const ChatTextArea = () => {
  return (
    <div className="absolute bottom-16 left-0 right-0 w-full mb-5 lg:px-2 md:px-5 px-3">
      <form className="flex flex-row items-center p-1 pl-3 gap-3 bg-gray-100 ring-1 ring-gray-300 shadow-md rounded-full w-full">
        <input
          type="text"
          className="outline-none box-border w-full bg-transparent"
          placeholder="Message Zolak"
        />

        <Button
          content={<IoArrowUp />}
          variant="bg-black"
          radius="rounded-full"
        />
      </form>
    </div>
  );
};

export default ChatTextArea;
