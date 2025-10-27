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
  "font-normal rounded-lg transition-all duration-200 focus:outline-none hover:shadow-md hover:scale-[1.02] active:scale-[0.98]";
const variantStyles = {
  primary: "text-white",
  secondary: "bg-[var(--background-color)] text-black",
  outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
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
}) => {
  const getBackgroundStyle = () => {
    if (variant === "primary") {
      return { backgroundColor: "#2a64f5" };
    }
    return {};
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={getBackgroundStyle()}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
