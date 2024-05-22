import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.svg";

const Logo = () => {
  return (
    <div className="flex flex-shrink-0 items-center">
      <Image className="h-5 w-auto invert" src={logo} alt="Zolak logo" />
    </div>
  );
};

export default Logo;
