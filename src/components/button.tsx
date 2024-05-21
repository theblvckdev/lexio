import React, { ReactNode } from "react";

interface ButtonProps {
  content: ReactNode;
  radius?: string;
  variant: string;
}

const Button = ({ content, radius, variant }: ButtonProps) => {
  return (
    <button className={`p-2.5 ${variant} ${radius} text-white outline-none`}>
      {content}
    </button>
  );
};

export default Button;
