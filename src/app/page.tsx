import React from "react";
import Navbar from "@/components/navbar";
import ChatTextArea from "@/components/chat_textarea";
import ChatContainer from "@/components/chat_container";

const Home = () => {
  return (
    <>
      <main className="h-screen w-screen overflow-hidden bg-black">
        <Navbar />
        <div className="max-w-2xl mx-auto w-full overflow-y-hidden h-full relative">
          <ChatContainer />
          <ChatTextArea />
        </div>
      </main>
    </>
  );
};

export default Home;
