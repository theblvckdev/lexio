import React, { ReactNode } from "react";

interface ButtonProps {
  content: ReactNode;
  radius?: string;
  variant: string;
  width?: string;
}

const Button = ({ content, radius, variant, width }: ButtonProps) => {
  return (
    <button
      className={`p-2.5 ${variant} ${radius} ${width} text-white outline-none shadow-md`}
    >
      {content}
    </button>
  );
};

export default Button;
