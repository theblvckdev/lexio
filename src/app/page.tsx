import React from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const Home = () => {
  return (
    <main className="flex flex-row h-screen w-screen overflow-hidden">
      <div className="lg:basis-1/5">
        <Sidebar />
      </div>
      <div className="lg:basis-4/5 basis-auto w-full">
        <Navbar />
      </div>
    </main>
  );
};

export default Home;
