"use client";

import useAppContext from "@/hooks/use_app_context";
import React from "react";

const Sidebar = () => {
  const { state } = useAppContext();

  return (
    <aside
      className={`lg:w-full lg:relative fixed h-screen md:w-[50%] w-[70%] lg:left-0 ${
        state.isOpen ? "left-0" : "-left-[100%]"
      } bg-gray-50 border-r duration-300 ease-in`}
    ></aside>
  );
};

export default Sidebar;
