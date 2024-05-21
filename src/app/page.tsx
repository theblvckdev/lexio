import React from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import ChatTextArea from "@/components/chat_textarea";

const Home = () => {
  return (
    <>
      <main className="flex flex-row h-screen w-screen overflow-hidden">
        <div className="lg:basis-1/5">
          <Sidebar />
        </div>
        <div className="lg:basis-4/5 basis-auto w-full">
          <Navbar />

          <div className="max-w-2xl mx-auto w-full overflow-y-hidden h-full relative">
            <div className="h-full lg:px-0 md:px-5 px-3 overflow-y-auto"></div>
            <ChatTextArea />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
