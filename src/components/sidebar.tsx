"use client";

import useAppContext from "@/hooks/use_app_context";
import React from "react";
import Button from "./button";
import { IoAddOutline } from "react-icons/io5";

const Sidebar = () => {
  const { state } = useAppContext();

  return (
    <aside
      className={`lg:w-full lg:relative fixed h-screen md:w-[50%] w-[70%] lg:left-0 ${
        state.isOpen ? "left-0" : "-left-[100%]"
      } bg-gray-50 border-r duration-300 ease-in overflow-hidden`}
    >
      <div className="p-3 relative lg:mt-0 mt-10">
        <Button
          width="w-full"
          content={
            <div className="flex items-center justify-between gap-2 text-sm">
              <div>New Chat</div>
              <IoAddOutline className="text-xl" />
            </div>
          }
          variant="bg-black"
          radius="rounded-md"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
