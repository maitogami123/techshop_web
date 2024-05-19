import React, { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | undefined;
  variant?: string;
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
