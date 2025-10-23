import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

const baseStyles =
  "font-normal rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
const variantStyles = {
  primary: "bg-[var(--secondary-color)] text-white focus:ring-gray-500",
  secondary: "bg-[var(--background-menu)] text-black focus:ring-purple-500",
  outline:
    "border-2 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-gray-50 focus:ring-gray-500",
};
const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
      disabled ? "opacity-50 cursor-not-allowed" : ""
    } ${className}`}
  >
    {children}
  </button>
);

export default Button;
